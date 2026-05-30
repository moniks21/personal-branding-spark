import { AWARDS, PUBLICATIONS } from "../data/content";
import { IconAward } from "./Icons";

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

          <div>
            {PUBLICATIONS.map((p) => (
              <article className="pub" key={p.title}>
                {p.image && (
                  <div className="pub-image">
                    <img src={p.image} alt={p.title} />
                  </div>
                )}
                <div className="pub-year">
                  {p.year}
                  <small>{p.month}</small>
                </div>
                <div>
                  <h4>{p.title}</h4>
                  <p className="journal">{p.journal}</p>
                </div>
                <div className="pub-tag">{p.tag}</div>
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
              <img src="/images/gallery/famdent-stage.jpeg" alt="Dr. Monika Singh receiving the Famdent Student of the Year award on stage" loading="lazy" />
              <figcaption>Famdent Excellence in Dentistry Awards · Student of the Year (PG, Zone B)</figcaption>
            </figure>
            <figure>
              <img src="/images/gallery/famdent-trophy.jpeg" alt="Dr. Monika Singh with the Famdent trophy" loading="lazy" />
              <figcaption>Excellence in Dentistry · Best Post-Graduate Student</figcaption>
            </figure>
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
