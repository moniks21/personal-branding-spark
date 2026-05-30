import { createFileRoute } from "@tanstack/react-router";
import PortfolioApp from "@/components_portfolio/PortfolioApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Monika Singh — Oral & Maxillofacial Surgeon" },
      {
        name: "description",
        content:
          "Dr. Monika Singh — AOMSI Fellow in Orthognathic Surgery & ABMSS Fellow in Cleft Lip and Palate Surgery. Oral & Maxillofacial Surgeon practicing in Surat, India.",
      },
      { property: "og:title", content: "Dr. Monika Singh — Oral & Maxillofacial Surgeon" },
      {
        property: "og:description",
        content:
          "Advanced orthognathic, TMJ, and cleft surgical care — delivered with precision and compassion.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <PortfolioApp />;
}
