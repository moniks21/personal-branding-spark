import { EDUCATION, EXPERIENCE } from "../data/content";

export default function Journey() {
  return (
    <section id="journey">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The journey</span>
          <h2>A decade of deliberate training across India and beyond.</h2>
          <p>
            From a university topper at Ramaiah to a senior resident at SCB and an orthognathic
            fellow at Nuface — every step has been taken with intent.
          </p>
        </div>

        <div className="two-col">
          <div>
            <h3 className="col-title">Experience &amp; Fellowships</h3>
            <div className="timeline">
              {EXPERIENCE.map((e) => (
                <div className="tl-item" key={e.title}>
                  <div className="tl-date">{e.date}</div>
                  <h4>{e.title}</h4>
                  <div className="org">{e.org}</div>
                  <p>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="col-title">Education</h3>
            <div className="timeline">
              {EDUCATION.map((e) => (
                <div className="tl-item" key={e.title}>
                  <div className="tl-date">{e.date}</div>
                  <h4>{e.title}</h4>
                  <div className="org">{e.org}</div>
                  <p>{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
