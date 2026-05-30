import { DOCTOR } from "../data/content";
import { IconArrow, IconCaduceus, IconPin } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Surgeon · Educator · Researcher</span>
          <h1>
            Precision craftsmanship for the <em style={{ color: "var(--brand-700)" }}>face you live in.</em>
          </h1>
          <p className="tagline">{DOCTOR.tagline}</p>

          <div className="hero-credentials">
            <span className="chip">AOMSI Fellow · Orthognathic Surgery</span>
            <span className="chip">ABMSS Fellow · Cleft Lip &amp; Palate</span>
            <span className="chip">PhD Candidate · Custom-fit TMJ TJR</span>
            <span className="chip">MDS · Oral &amp; Maxillofacial Surgery</span>
          </div>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Book a consultation <IconArrow width={16} height={16} />
            </a>
            <a href="#about" className="btn btn-ghost">
              Read her story
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <IconPin width={16} height={16} style={{ verticalAlign: -3, marginRight: 6 }} />
              <strong>{DOCTOR.city}</strong>
            </span>
            <span>
              Practicing at <strong>{DOCTOR.hospitals}</strong>
            </span>
          </div>
        </div>

        <div className="hero-visual hero-photo">
          <img
            src="/images/monika-portrait.png"
            alt="Dr. Monika Singh in surgical scrubs at the hospital"
            loading="eager"
          />
          <div className="hero-photo-overlay" />
          <IconCaduceus className="caduceus" width={48} height={48} />
          <p className="quote">
            “It all starts with a dream — of becoming a surgeon without knowing the challenges
            awaiting down the path.”
            <small>— Dr. Monika Singh</small>
          </p>
          <div className="hero-badge">
            <span className="dot" />
            <div>
              <strong>Accepting new consultations</strong>
              <span>Nuface Hospital · Surat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
