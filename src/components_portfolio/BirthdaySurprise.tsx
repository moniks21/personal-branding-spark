import { useEffect, useMemo, useState } from "react";
import { IconSparkle } from "./Icons";

const COLORS = ["#b5874a", "#e8c988", "#8a3a2a", "#f4dcd6", "#5c1e24", "#b85a3e"];

function Confetti({ count = 80 }: { count?: number }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        duration: 3 + Math.random() * 2.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotate: Math.random() * 360,
        size: 8 + Math.random() * 8,
      })),
    [count]
  );

  return (
    <div className="confetti-layer" aria-hidden>
      {pieces.map((p, i) => (
        <span
          key={i}
          className="confetti"
          style={{
            left: `${p.left}%`,
            background: p.color,
            width: p.size,
            height: p.size * 1.4,
            transform: `rotate(${p.rotate}deg)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function BirthdaySurprise() {
  const [open, setOpen] = useState(false);
  const [celebrate, setCelebrate] = useState(false);

  function trigger() {
    setOpen(true);
    setCelebrate(true);
  }

  useEffect(() => {
    if (!celebrate) return;
    const t = setTimeout(() => setCelebrate(false), 6000);
    return () => clearTimeout(t);
  }, [celebrate]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        className="bday-fab"
        aria-label="A little birthday surprise"
        title="A little surprise for the birthday girl"
        onClick={trigger}
      >
        <IconSparkle width={22} height={22} />
      </button>

      {celebrate && <Confetti />}

      {open && (
        <div className="bday-modal" role="dialog" aria-modal="true" onClick={() => setOpen(false)}>
          <div className="bday-card" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
            <div className="ornament" style={{ maxWidth: 140, margin: "0 auto 14px" }}>
              &#10022;
            </div>
            <h2>Happy Birthday, Monika!</h2>
            <p>
              You are a surgeon, a scholar, and the kind of friend who quietly sets the bar
              higher for everyone around her. This little website is a small gift — a tribute
              to the work you do and the lives you touch.
            </p>
            <p>
              May this year bring you steadier hands, kinder patients, braver research, and a
              lot more sunshine on the days between OTs.
            </p>
            <div className="signed">— With love, from your friends ♥</div>
          </div>
        </div>
      )}
    </>
  );
}
