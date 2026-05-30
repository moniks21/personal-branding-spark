import { ACTIVITIES } from "../data/content";

export default function Activity() {
  return (
    <section className="activity" id="activity">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Conferences &amp; fellowships</span>
          <h2>Always a student — of surgery, of the face, of the patient.</h2>
          <p>
            Recent learning from TMJ mini-residencies in Scottsdale and Baltimore, to
            international TMJ workshops in Cairo and orthognathic programmes in Bengaluru.
          </p>
        </div>

        <div className="activity-grid">
          {ACTIVITIES.map((a) => (
            <article className={`activity-card ${a.cls}`} key={a.title}>
              {a.image && (
                <div className="activity-media">
                  <img src={a.image} alt={a.title} loading="lazy" />
                </div>
              )}
              <div className="year">{a.year}</div>
              <div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
