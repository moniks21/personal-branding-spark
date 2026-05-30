import { AFFILIATIONS } from "../data/content";

export default function Affiliations() {
  return (
    <section className="affiliations tight" id="affiliations">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Practice &amp; affiliations</span>
          <h2>Proud to work alongside the very best.</h2>
          <p>
            A practice rooted in family, refined through fellowship, and anchored in two of
            Gujarat's trusted maxillofacial centres.
          </p>
        </div>

        <div className="affiliation-grid">
          {AFFILIATIONS.map((a) => (
            <div className="affiliation" key={a.name}>
              {a.logo ? (
                <img src={a.logo} alt={`${a.name} logo`} className="affiliation-logo" />
              ) : (
                <div className="affiliation-placeholder">
                  <span>{a.name.split(" ").slice(0, 2).join(" ")}</span>
                </div>
              )}
              <h4>{a.name}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
