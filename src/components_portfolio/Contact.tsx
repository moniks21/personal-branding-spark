import { useState, type FormEvent } from "react";
import { CONTACT } from "../data/content";
import { IconArrow, IconLinkedIn, IconMail, IconPhone, IconPin } from "./Icons";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(
      "Thank you. Your message has been noted — Dr. Monika's team will respond within 48 hours."
    );
    (e.target as HTMLFormElement).reset();
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Get in touch</span>
          <h2>Reach out for a consultation or second opinion.</h2>
          <p>
            Whether you are a patient seeking care, a colleague for collaboration, or a
            student curious about maxillofacial surgery — I would love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <div className="ci">
                <IconPin width={20} height={20} />
              </div>
              <div>
                <h4>Practice</h4>
                <p>
                  {CONTACT.clinic}
                  <br />
                  {CONTACT.clinic2}
                  <br />
                  {CONTACT.address}
                </p>
              </div>
            </div>
            <div className="contact-card">
              <div className="ci">
                <IconMail width={20} height={20} />
              </div>
              <div>
                <h4>Email</h4>
                <p>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </p>
              </div>
            </div>
            <div className="contact-card">
              <div className="ci">
                <IconPhone width={20} height={20} />
              </div>
              <div>
                <h4>Phone</h4>
                <p>
                  <a href={`tel:${CONTACT.phoneRaw}`}>{CONTACT.phone}</a>
                </p>
              </div>
            </div>
            <div className="contact-card">
              <div className="ci">
                <IconLinkedIn width={20} height={20} />
              </div>
              <div>
                <h4>LinkedIn</h4>
                <p>
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                    Dr. Monika Singh
                  </a>
                </p>
              </div>
            </div>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <h3>Send a message</h3>
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone (optional)</label>
              <input id="phone" name="phone" placeholder="+91 ..." />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Tell us briefly about the concern or reason for your visit."
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Send message <IconArrow width={16} height={16} />
            </button>
            {status && <div className="form-status">{status}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
