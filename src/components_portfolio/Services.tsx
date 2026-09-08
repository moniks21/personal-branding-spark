import { SERVICES } from "../data/content";
import { IconCyst } from "./Icons";
import ortho from "../assets/orthognathic-surgery.webp.asset.json";
import tmj from "../assets/tmj.webp.asset.json";
import cleft from "../assets/cleft.jpeg.asset.json";
import fracture from "../assets/fracture.webp.asset.json";
import implant from "../assets/implant.png.asset.json";

const ICON_IMAGES = [ortho.url, tmj.url, cleft.url, fracture.url, null, implant.url];

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
            const img = ICON_IMAGES[i];
            return (
              <article className="service" key={s.title}>
                <div className="service-icon">
                  {img ? (
                    <img src={img} alt="" className="service-icon-img" />
                  ) : (
                    <IconCyst width={26} height={26} />
                  )}
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
