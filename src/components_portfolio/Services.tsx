import { SERVICES } from "../data/content";
import {
  IconBone,
  IconJaw,
  IconScalpel,
  IconSmile,
  IconStethoscope,
  IconTooth,
} from "./Icons";

const ICONS = [IconJaw, IconSmile, IconBone, IconScalpel, IconStethoscope, IconTooth];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Specialties</span>
          <h2>Advanced surgical care for the face, jaws, and airway.</h2>
          <p>
            A practice grounded in evidence, refined through global fellowships, and delivered
            with the precision and compassion every patient deserves.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <article className="service" key={s.title}>
                <div className="service-icon">
                  <Icon width={26} height={26} />
                </div>
                <div className="service-num">({s.num})</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
