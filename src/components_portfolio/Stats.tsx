import { STATS } from "../data/content";

export default function Stats() {
  return (
    <section className="stats" aria-label="Key statistics" style={{ padding: 0 }}>
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s) => (
            <div className="stat" key={s.l}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
