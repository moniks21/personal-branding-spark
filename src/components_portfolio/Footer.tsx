import { CONTACT, SERVICES } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="brand" style={{ marginBottom: 18 }}>
              <img
                src="/images/monika-mark.png"
                alt="Dr. Monika Singh logo"
                className="brand-mark-img"
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

          <div className="footer-col">
            <h5>Specialties</h5>
            <div className="footer-tiles">
              {SERVICES.slice(0, 6).map((s) => (
                <a key={s.title} href="#services" title={s.title}>
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h5>Explore</h5>
            <div className="footer-tiles">
              <a href="#about">About</a>
              <a href="#journey">Journey</a>
              <a href="#research">Research</a>
              <a href="#activity">Activity</a>
              <a href="#affiliations">Practice</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <div className="footer-tiles">
              <a href={`mailto:${CONTACT.email}`}>Email</a>
              <a href={`tel:${CONTACT.phoneRaw}`}>Phone</a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="#contact">Book</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Dr. Monika Singh. All rights reserved.</span>
          <span className="crafted">
            Crafted with <span className="heart">♥</span> as a birthday gift.
          </span>
        </div>
      </div>
    </footer>
  );
}
