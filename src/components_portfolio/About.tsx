import { DOCTOR, HIGHLIGHTS } from "../data/content";
import { IconAward, IconHeart, IconSparkle, IconStethoscope } from "./Icons";

const ICONS = [IconStethoscope, IconAward, IconSparkle, IconHeart];

export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div className="about-text">
          <span className="eyebrow">About</span>
          <h2>
            A surgeon shaped by consistency, perseverance — and a deep respect for the
            patients she serves.
          </h2>
          {DOCTOR.about.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="about-signature">{DOCTOR.signature}</div>
        </div>

        <aside className="about-highlights" aria-label="Credentials & recognition">
          {HIGHLIGHTS.map((h, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div className="highlight" key={h.title}>
                <div className="highlight-icon">
                  <Icon width={22} height={22} />
                </div>
                <div>
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </div>
            );
          })}
        </aside>
      </div>
    </section>
  );
}
