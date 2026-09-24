import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().max(40).optional(),
  message: z.string().trim().min(5).max(3000),
});

const encodeBase64Url = (value: string) =>
  Buffer.from(value, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

export const sendConsultationRequest = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    const lovableApiKey = process.env["LOVABLE_API_KEY"];
    const gmailApiKey = process.env["GOOGLE_MAIL_API_KEY"];

    if (!lovableApiKey || !gmailApiKey) {
      throw new Error("Email delivery is not configured.");
    }

    const raw = encodeBase64Url(
      [
        "To: drmonikasinghsoni@gmail.com",
        `Reply-To: ${data.email}`,
        "Subject: New consultation request from drmonikasinghsoni.com",
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset="UTF-8"',
        "",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || "Not provided"}`,
        "",
        "Message:",
        data.message,
      ].join("\r\n"),
    );

    const response = await fetch(
      "https://connector-gateway.lovable.dev/google_mail/gmail/v1/users/me/messages/send",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${lovableApiKey}`,
          "X-Connection-Api-Key": gmailApiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ raw }),
      },
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Gmail send failed [${response.status}]: ${errorBody}`);
      throw new Error(`Email delivery failed [${response.status}].`);
    }

    return { sent: true };
  });