import { AWARDS, PUBLICATIONS } from "../data/content";
import { IconAward } from "./Icons";
import a1 from "../assets/award-1-2.jpeg.asset.json";
import a2 from "../assets/award-2-3.jpeg.asset.json";
import a3 from "../assets/award-3-3.jpeg.asset.json";
import a4 from "../assets/award-4-3.jpeg.asset.json";
import a5 from "../assets/award-5-3.jpeg.asset.json";
import a6 from "../assets/award-6-2.jpeg.asset.json";
import a7 from "../assets/award-7-2.jpeg.asset.json";
import a8 from "../assets/award-8-2.jpeg.asset.json";
import a9 from "../assets/award-9.jpeg.asset.json";

const AWARD_MOMENTS = [
  { src: a1.url, caption: "Gold Medal testimonial · MS Ramaiah University of Applied Sciences" },
  { src: a2.url, caption: "Fourth Convocation · MS Ramaiah University of Applied Sciences" },
  { src: a3.url, caption: "Convocation with the faculty · MS Ramaiah University" },
  { src: a4.url, caption: "Presenting 'Bear Mauling: Challenges & Sequelae' · 2nd AOMSI Odisha State Chapter" },
  { src: a5.url, caption: "Receiving the certificate · 2nd AOMSI Odisha State Chapter" },
  { src: a6.url, caption: "Academic presentation on ameloblastoma · SCB Dental College, Cuttack" },
  { src: a7.url, caption: "Speaking on TMJ arthroscopy · AOMSI MIDCOMS 2026, Bhopal" },
  { src: a8.url, caption: "47th AOMSI Annual Conference · Delhi, 2023" },
  { src: a9.url, caption: "3rd AOMSI Odisha State Chapter Conference · Certificate of appreciation" },
];

export default function Research() {
  return (
    <>
      <section className="publications" id="research">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Research &amp; publications</span>
            <h2>Contributing to the literature — one careful case at a time.</h2>
            <p>
              Peer-reviewed work in the Journal of Maxillofacial and Oral Surgery (Springer
              Nature), focused on unusual presentations and systematic reviews that advance
              clinical decision-making.
            </p>
          </div>

          <div className="pub-tiles">
            {PUBLICATIONS.map((p) => (
              <article className="pub-tile" key={p.title}>
                {p.image && (
                  <div className="pub-tile-image">
                    <img src={p.image} alt={p.title} loading="lazy" />
                  </div>
                )}
                <div className="pub-tile-body">
                  <div className="pub-tile-meta">
                    <span className="pub-tile-year">
                      {p.year}
                      {p.month !== "—" ? ` · ${p.month}` : ""}
                    </span>
                    <span className="pub-tag">{p.tag}</span>
                  </div>
                  <h4>{p.title}</h4>
                  <p className="journal">{p.journal}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tight" id="awards">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Honours &amp; awards</span>
            <h2>Recognition earned through relentless curiosity.</h2>
          </div>
          <div className="award-moments">
            <figure>
              <img src="/images/gallery/famdent-stage.jpeg" alt="Dr Monika Singh Soni receiving the Famdent Student of the Year award on stage" loading="lazy" />
              <figcaption>Famdent Excellence in Dentistry Awards · Student of the Year (PG, Zone B)</figcaption>
            </figure>
            <figure>
              <img src="/images/gallery/famdent-trophy.jpeg" alt="Dr Monika Singh Soni with the Famdent trophy" loading="lazy" />
              <figcaption>Excellence in Dentistry · Best Post-Graduate Student</figcaption>
            </figure>
            {AWARD_MOMENTS.map((m) => (
              <figure key={m.src}>
                <img src={m.src} alt={m.caption} loading="lazy" />
                <figcaption>{m.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="awards-grid">
            {AWARDS.map((a) => (
              <div className="award" key={a.title}>
                <div className="trophy">
                  <IconAward width={28} height={28} />
                </div>
                <h4>{a.title}</h4>
                <p>{a.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
