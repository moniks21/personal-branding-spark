import { CONTACT, SERVICES } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ marginBottom: 18 }}>
              <img
                src="/images/monika-mark.svg"
                alt=""
                className="brand-mark-img"
                aria-hidden="true"
              />
              <span className="brand-text" style={{ color: "#fff" }}>
                <strong style={{ color: "#fff" }}>Dr. Monika Singh</strong>
                <span style={{ color: "rgba(250,246,237,0.55)" }}>
                  Oral &amp; Maxillofacial Surgeon
                </span>
              </span>
            </div>
            <p style={{ maxWidth: 320, color: "rgba(247,244,236,0.6)", margin: 0 }}>
              Advanced orthognathic, cleft, TMJ, and craniofacial surgical care — built on
              consistency, perseverance, and a patient-first philosophy.
            </p>
          </div>
          <div>
            <h5>Specialties</h5>
            {SERVICES.slice(0, 4).map((s) => (
              <a key={s.title} href="#services">
                {s.title}
              </a>
            ))}
          </div>
          <div>
            <h5>Explore</h5>
            <a href="#about">About</a>
            <a href="#journey">Journey</a>
            <a href="#research">Research</a>
            <a href="#activity">Activity</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h5>Contact</h5>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="#contact">Book consultation</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Dr. Monika Singh. All rights reserved.</span>
          <span>
            Crafted with <span className="heart">♥</span> as a birthday gift.
          </span>
        </div>
      </div>
    </footer>
  );
}
