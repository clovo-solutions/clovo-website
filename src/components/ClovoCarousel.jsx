"use client";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    headline: "Your Website Is",
    headlineBold: "Losing Clients?",
    sub: "People choose competitors because they look better online.",
    glowPos: "bottom-center",
    accentWord: "Losing Clients.",
  },
  {
    headline: "First Impressions",
    headlineBold: "Happen Online.",
    sub: "Your website decides if someone trusts you — in seconds.",
    glowPos: "top-right",
    accentWord: "Online.",
  },
  {
    headline: "Outdated Design",
    headlineBold: "Kills Trust.",
    sub: "Slow, confusing sites push visitors away instantly.",
    glowPos: "center-left",
    accentWord: "Kills Trust.",
  },
  {
    headline: "We Build Sites",
    headlineBold: "That Convert.",
    sub: "Modern, fast websites designed to bring you clients.",
    glowPos: "center",
    accentWord: "That Convert.",
  },
  {
    headline: "Built For",
    headlineBold: "Growth.",
    sub: "SEO, performance, and UX — working together.",
    glowPos: "bottom-right",
    accentWord: "Growth.",
  },
  {
    headline: "Trusted By",
    headlineBold: "Businesses.",
    sub: "Helping brands grow with high-converting websites.",
    glowPos: "top-center",
    accentWord: "Businesses.",
  },
  {
    headline: "Ready To",
    headlineBold: "Grow?",
    sub: null,
    cta: true,
    glowPos: "full",
    accentWord: "Grow?",
  },
];

const glowStyles = {
  "bottom-center": { bottom: "-18%", left: "50%", transform: "translateX(-50%)" },
  "top-right": { top: "-10%", right: "-8%" },
  "center-left": { top: "40%", left: "-12%", transform: "translateY(-50%)" },
  center: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  "bottom-right": { bottom: "-14%", right: "-8%" },
  "top-center": { top: "-16%", left: "50%", transform: "translateX(-50%)" },
  full: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
};

export default function ClovoCarousel() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const [animKey, setAnimKey] = useState(0);

  const go = useCallback(
    (idx) => {
      setDir(idx > current ? 1 : -1);
      setCurrent(idx);
      setAnimKey((k) => k + 1);
    },
    [current]
  );

  const next = () => go(current < slides.length - 1 ? current + 1 : 0);
  const prev = () => go(current > 0 ? current - 1 : slides.length - 1);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const s = slides[current];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#0A0A0F",
        overflow: "hidden",
        fontFamily: "'Outfit', 'Manrope', sans-serif",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800;900&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(28px); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes fadeSlideInSub {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.55; transform: translate(var(--tx, -50%), var(--ty, 0)) scale(1); }
          50% { opacity: 0.75; transform: translate(var(--tx, -50%), var(--ty, 0)) scale(1.08); }
        }
        @keyframes dotPop {
          0% { transform: scale(1); }
          50% { transform: scale(1.35); }
          100% { transform: scale(1); }
        }
        @keyframes grainShift {
          0% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -2%); }
          20% { transform: translate(1%, 3%); }
          30% { transform: translate(-3%, 1%); }
          40% { transform: translate(3%, -1%); }
          50% { transform: translate(-1%, 2%); }
          60% { transform: translate(2%, -3%); }
          70% { transform: translate(-2%, 1%); }
          80% { transform: translate(1%, -2%); }
          90% { transform: translate(-1%, 3%); }
          100% { transform: translate(0, 0); }
        }
        .nav-arrow {
          position: absolute; top: 50%; width: 52px; height: 52px;
          border-radius: 50%; border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.03); backdrop-filter: blur(8px);
          color: #6B6B7B; font-size: 20px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.3s ease; z-index: 20;
        }
        .nav-arrow:hover {
          border-color: #00FF88; color: #00FF88;
          background: rgba(0,255,136,0.06);
          box-shadow: 0 0 30px rgba(0,255,136,0.1);
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
          animation: "grainShift 8s steps(10) infinite",
          opacity: 0.5,
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        key={`glow-${animKey}`}
        style={{
          position: "absolute",
          width: s.glowPos === "full" ? "600px" : "480px",
          height: s.glowPos === "full" ? "600px" : "480px",
          borderRadius: "50%",
          background:
            s.glowPos === "full"
              ? "radial-gradient(circle, rgba(0,255,136,0.12) 0%, rgba(0,255,136,0.04) 40%, transparent 70%)"
              : "radial-gradient(circle, rgba(0,255,136,0.10) 0%, rgba(0,255,136,0.03) 40%, transparent 70%)",
          filter: "blur(80px)",
          animation: "glowPulse 6s ease-in-out infinite",
          zIndex: 2,
          pointerEvents: "none",
          ...glowStyles[s.glowPos],
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 36,
          left: 40,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 7,
            background: "linear-gradient(135deg, #00FF88 0%, #00CC6A 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 15,
            fontWeight: 900,
            color: "#0A0A0F",
          }}
        >
          C
        </div>
        <span
          style={{
            fontSize: 15,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: "#4A4A5A",
            textTransform: "uppercase",
          }}
        >
          Clovo
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          top: 40,
          right: 44,
          zIndex: 10,
          fontSize: 14,
          fontWeight: 400,
          color: "#3A3A4A",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      <div
        key={`content-${animKey}`}
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 820,
          padding: "0 32px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(52px, 9vw, 104px)",
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            color: "#F0EFF4",
            margin: 0,
            animation: "fadeSlideIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        >
          {s.headline}
          <br />
          <span
            style={{
              color: "#00FF88",
              textShadow: "0 0 80px rgba(0,255,136,0.3), 0 0 160px rgba(0,255,136,0.1)",
            }}
          >
            {s.headlineBold}
          </span>
        </h1>

        {s.sub && (
          <p
            style={{
              fontSize: "clamp(17px, 2.4vw, 24px)",
              fontWeight: 400,
              color: "#6B6B7B",
              marginTop: 28,
              lineHeight: 1.55,
              letterSpacing: "0.005em",
              animation: "fadeSlideInSub 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both",
            }}
          >
            {s.sub}
          </p>
        )}

        {s.cta && (
          <div
            style={{
              marginTop: 44,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 18,
              animation: "fadeSlideInSub 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 36px",
                borderRadius: 60,
                background: "linear-gradient(135deg, #00FF88 0%, #00DD77 100%)",
                color: "#0A0A0F",
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: "-0.01em",
                cursor: "pointer",
                boxShadow:
                  "0 0 40px rgba(0,255,136,0.25), 0 0 80px rgba(0,255,136,0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 0 60px rgba(0,255,136,0.35), 0 0 120px rgba(0,255,136,0.15), inset 0 1px 0 rgba(255,255,255,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 40px rgba(0,255,136,0.25), 0 0 80px rgba(0,255,136,0.1), inset 0 1px 0 rgba(255,255,255,0.2)";
              }}
            >
              clovo-solutions.com
              <span style={{ fontSize: 18 }}>→</span>
            </div>
            <span
              style={{
                fontSize: 16,
                color: "#4A4A5A",
                fontWeight: 400,
              }}
            >
              or DM us{" "}
              <span style={{ color: "#00FF88", fontWeight: 600 }}>"WEBSITE"</span> for a
              free audit
            </span>
          </div>
        )}
      </div>

      <button
        className="nav-arrow"
        onClick={prev}
        style={{ left: 24, transform: "translateY(-50%)" }}
      >
        ‹
      </button>
      <button
        className="nav-arrow"
        onClick={next}
        style={{ right: 24, transform: "translateY(-50%)" }}
      >
        ›
      </button>

      <div
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
          zIndex: 20,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            style={{
              width: current === i ? 32 : 8,
              height: 8,
              borderRadius: 100,
              border: "none",
              cursor: "pointer",
              background:
                current === i
                  ? "linear-gradient(90deg, #00FF88, #00CC6A)"
                  : "rgba(255,255,255,0.08)",
              boxShadow: current === i ? "0 0 16px rgba(0,255,136,0.4)" : "none",
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              animation: current === i ? "dotPop 0.35s ease" : "none",
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 38,
          right: 44,
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: 40,
            height: 1,
            background: "#2A2A3A",
          }}
        />
      </div>
    </div>
  );
}