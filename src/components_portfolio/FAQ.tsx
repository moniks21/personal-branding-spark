import { useState } from "react";
import { FAQS } from "../data/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="tight" id="faq">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Frequently asked</span>
          <h2>Thoughtful answers to the questions patients ask most.</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={f.q}>
              <button
                className="faq-q"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <span className="plus" aria-hidden>
                  +
                </span>
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
