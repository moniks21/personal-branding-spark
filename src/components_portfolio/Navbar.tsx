import { useEffect, useState } from "react";
import { IconMenu, IconArrow } from "./Icons";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Specialties" },
  { href: "#journey", label: "Journey" },
  { href: "#research", label: "Research" },
  { href: "#activity", label: "Activity" },
  { href: "#affiliations", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <img
            src="/images/monika-mark.png"
            alt="Dr. Monika Singh logo"
            className="brand-mark-img"
          />
          <span className="brand-text">
            <strong>Dr. Monika Singh</strong>
            <span>Oral &amp; Maxillofacial Surgeon</span>
          </span>
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="#contact" className="btn btn-primary">
            Book consultation <IconArrow width={16} height={16} />
          </a>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <IconMenu />
          </button>
        </div>
      </div>
    </header>
  );
}
