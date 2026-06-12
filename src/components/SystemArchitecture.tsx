"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const VB_W = 800;
const VB_H = 650;
const HUB_CENTER = { x: VB_W / 2, y: VB_H / 2 };

type Tier = "hub" | "primary" | "secondary" | "output";
type NodeDef = { id: string; label: string; x: number; y: number; icon: string; tier: Tier; };

const NODES: NodeDef[] = [
  { id: "hub",        label: "",           x: HUB_CENTER.x, y: HUB_CENTER.y, icon: "hub",        tier: "hub"       },
  { id: "strategy",   label: "Strategy",   x: 130,           y: 150,           icon: "strategy",   tier: "primary"   },
  { id: "seo",        label: "SEO",        x:  85,           y: 325,           icon: "seo",        tier: "primary"   },
  { id: "booking",    label: "Booking",    x: 130,           y: 500,           icon: "booking",    tier: "primary"   },
  { id: "automation", label: "Automation", x: 670,           y: 150,           icon: "automation", tier: "primary"   },
  { id: "crm",        label: "CRM",        x: 725,           y: 325,           icon: "crm",        tier: "secondary" },
  { id: "analytics",  label: "Analytics",  x: 670,           y: 500,           icon: "analytics",  tier: "secondary" },
  { id: "clients",    label: "Clients",    x: 400,           y: 695,           icon: "clients",    tier: "output"    },
];

const HUB_HALF = 40;
type Side = "left" | "right" | "top" | "bottom";

function hubExit(side: Side) {
  switch (side) {
    case "left":   return { x: HUB_CENTER.x - HUB_HALF, y: HUB_CENTER.y };
    case "right":  return { x: HUB_CENTER.x + HUB_HALF, y: HUB_CENTER.y };
    case "top":    return { x: HUB_CENTER.x, y: HUB_CENTER.y - HUB_HALF };
    case "bottom": return { x: HUB_CENTER.x, y: HUB_CENTER.y + HUB_HALF };
  }
}

// Half the node box size in viewBox units.
// Node boxes render at 72px on a 900px container over an 800-unit viewBox:
// (72 / 900) * 800 ≈ 64 vb units → half ≈ 32. Use 36 for a small gap.
const NODE_HALF = 36;

function buildOrthogonalPath(node: NodeDef): string {
  const goingLeft = node.x < HUB_CENTER.x;
  const goingDown = node.y > HUB_CENTER.y;
  const sameRow   = Math.abs(node.y - HUB_CENTER.y) < 1;
  const sameCol   = Math.abs(node.x - HUB_CENTER.x) < 1;

  // Straight horizontal (SEO arrives from right, CRM from left).
  // Line arrives horizontally → offset node.x by half-width toward hub.
  if (sameRow) {
    const start = hubExit(goingLeft ? "left" : "right");
    const endX  = goingLeft ? node.x + NODE_HALF : node.x - NODE_HALF;
    return `M ${start.x} ${start.y} H ${endX}`;
  }

  // Straight vertical (Clients arrives from above).
  // Line arrives vertically → offset node.y by half-height toward hub.
  if (sameCol) {
    const start = hubExit(goingDown ? "bottom" : "top");
    const endY  = goingDown ? node.y - NODE_HALF : node.y + NODE_HALF;
    return `M ${start.x} ${start.y} V ${endY}`;
  }

  // L-shaped path. Final segment is always horizontal, arriving at node.x.
  // Offset node.x by half-width in the direction the line is coming from.
  const start  = hubExit(goingLeft ? "left" : "right");
  const elbowX = goingLeft
    ? start.x - (start.x - node.x) * 0.55
    : start.x + (node.x - start.x) * 0.45;
  const r     = 12;
  const hSign = goingLeft ? -1 : 1;
  const vSign = goingDown  ?  1 : -1;

  // The line arrives from the elbow side, so offset toward the elbow (−hSign).
  const endX  = node.x - hSign * NODE_HALF;

  const c1App = elbowX - hSign * r;
  const c1End = { x: elbowX, y: start.y + vSign * r };
  const c2App = node.y - vSign * r;
  const c2End = { x: elbowX + hSign * r, y: node.y };

  return [
    `M ${start.x} ${start.y}`,
    `H ${c1App}`,
    `Q ${elbowX} ${start.y} ${c1End.x} ${c1End.y}`,
    `V ${c2App}`,
    `Q ${elbowX} ${node.y} ${c2End.x} ${c2End.y}`,
    `H ${endX}`,
  ].join(" ");
}

type PathDef = { id: string; d: string; from: string; to: string; speed: number; delay: number; };

const PATHS: PathDef[] = NODES
  .filter((n) => n.tier !== "hub")
  .map((n, i) => ({
    id: `hub-${n.id}`,
    d: buildOrthogonalPath(n),
    from: "hub",
    to: n.id,
    speed: 4 + (i % 3) * 0.5 + (i % 2) * 0.5,
    delay: (i * 0.3) % 1.8,
  }));

function NodeIcon({ type, size = 24 }: { type: string; size?: number }) {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24", fill: "none",
    stroke: "currentColor", strokeWidth: 1.8,
    strokeLinecap: "round" as const, strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "strategy":   return <svg {...props}><path d="M9 12l2 2 4-4" /><path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" /></svg>;
    case "seo":        return <svg {...props}><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>;
    case "booking":    return <svg {...props}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>;
    case "automation": return <svg {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>;
    case "crm":        return <svg {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case "analytics":  return <svg {...props}><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>;
    case "clients":    return <svg {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    default:           return null;
  }
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function SystemArchitecture() {
  const [alive,       setAlive]       = useState(false);
  const [reduced,     setReduced]     = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const sectionRef    = useRef<HTMLElement>(null);
  const networkInView = useInView(sectionRef, { once: true, amount: 0.15 });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const h = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  useEffect(() => {
    if (networkInView) {
      const t = setTimeout(() => setAlive(true), 200);
      return () => clearTimeout(t);
    }
  }, [networkInView]);

  const isPathHighlighted = useCallback(
    (path: PathDef) => !!hoveredNode && (path.from === hoveredNode || path.to === hoveredNode),
    [hoveredNode]
  );

  const isNodeConnectedToHover = useCallback(
    (nodeId: string) => {
      if (!hoveredNode) return false;
      if (nodeId === hoveredNode) return true;
      return PATHS.some((p) => (p.from === hoveredNode && p.to === nodeId) || (p.to === hoveredNode && p.from === nodeId));
    },
    [hoveredNode]
  );

  const positioned = useMemo(
    () => NODES.map((n) => ({ ...n, leftPct: (n.x / VB_W) * 100, topPct: (n.y / VB_H) * 100 })),
    []
  );

  return (
    <section ref={sectionRef} id="system" className="relative py-28 sm:py-36 overflow-hidden bg-[#050505]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-[0.015]" />
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(1,217,87,0.05) 0%, rgba(1,217,87,0.015) 40%, transparent 65%)", filter: "blur(60px)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease }}
          className="text-center mb-16 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent/15 bg-accent/[0.04] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-60" aria-hidden />
            <span className="text-[11px] font-mono text-accent/60 tracking-[0.18em] uppercase">The Engine</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white mb-5">
            One System.{" "}<span className="gradient-text">Every Growth Lever.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/35 max-w-xl mx-auto leading-relaxed">
            Strategy, execution, and automation feeding into one engine designed to bring you clients consistently.
          </p>
        </motion.div>

        {/* Desktop Network */}
        <div className="hidden md:block relative w-full max-w-[900px] mx-auto">
          <div className="relative w-full" style={{ aspectRatio: `${VB_W} / ${VB_H}` }}>
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="absolute inset-0 w-full h-full"
              fill="none" preserveAspectRatio="none" aria-hidden
            >
              <defs>
                <filter id="glow-path" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {PATHS.map((path, i) => {
                const highlighted = isPathHighlighted(path);
                return (
                  <g key={path.id}>
                    <path d={path.d} stroke="#01D957" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                      opacity={highlighted ? 0.15 : 0.04} filter="url(#glow-path)" vectorEffect="non-scaling-stroke"
                      style={{ strokeDasharray: alive ? "none" : "2000", strokeDashoffset: alive ? 0 : 2000,
                        transition: `stroke-dashoffset 1.5s ease-out ${0.6 + i * 0.1}s, opacity 0.3s ease` }} />
                    <path d={path.d} stroke="#01D957" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                      opacity={highlighted ? 0.45 : 0.15} vectorEffect="non-scaling-stroke"
                      style={{ strokeDasharray: alive ? "none" : "2000", strokeDashoffset: alive ? 0 : 2000,
                        transition: `stroke-dashoffset 1.5s ease-out ${0.6 + i * 0.1}s, opacity 0.3s ease` }} />
                    {!reduced && alive && (
                      <>
                        <circle r="3" fill="#01D957" opacity="0.7" filter="url(#glow-path)">
                          <animateMotion dur={`${path.speed}s`} repeatCount="indefinite" begin={`${1.5 + path.delay}s`} path={path.d} />
                        </circle>
                        <circle r="8" fill="#01D957" opacity="0.08">
                          <animateMotion dur={`${path.speed}s`} repeatCount="indefinite" begin={`${1.5 + path.delay}s`} path={path.d} />
                        </circle>
                      </>
                    )}
                  </g>
                );
              })}
            </svg>

            {positioned.map((node, i) => {
              const isHub       = node.tier === "hub";
              const isOutput    = node.tier === "output";
              const isSecondary = node.tier === "secondary";
              const connected   = isNodeConnectedToHover(node.id);
              const hovered     = hoveredNode === node.id;
              const nodeSize    = isHub ? "w-[90px] h-[90px]" : "w-[72px] h-[72px]";
              const revealDelay = isHub ? 0.3 : 0.8 + i * 0.08;

              return (
                <motion.div
                  key={node.id}
                  // FIX 1: x/y in Framer Motion so translate composes with scale
                  // into one transform, preventing scale from clobbering the centering.
                  initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
                  animate={alive
                    ? { opacity: 1, scale: 1,   x: "-50%", y: "-50%" }
                    : { opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }
                  }
                  transition={{ duration: 0.6, delay: revealDelay, ease }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="absolute flex flex-col items-center gap-2 cursor-default z-10"
                  style={{ left: `${node.leftPct}%`, top: `${node.topPct}%` }}
                >
                  <div
                    className={`relative ${nodeSize} rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                      isHub                  ? "bg-accent/[0.08] border-accent/30"
                      : connected || hovered ? "bg-accent/[0.06] border-accent/25"
                      : isOutput             ? "bg-white/[0.03] border-white/[0.08]"
                      :                        "bg-white/[0.02] border-white/[0.06]"
                    }`}
                    style={{
                      boxShadow: isHub
                        ? "0 0 40px rgba(1,217,87,0.15), 0 0 80px rgba(1,217,87,0.05), inset 0 0 30px rgba(1,217,87,0.05)"
                        : connected || hovered
                        ? "0 0 25px rgba(1,217,87,0.12), inset 0 0 15px rgba(1,217,87,0.03)"
                        : "0 0 15px rgba(1,217,87,0.03), inset 0 0 10px rgba(1,217,87,0.01)",
                      // FIX 2: hover scale on the inner box so it doesn't fight FM's transform
                      transform: hovered && !isHub ? "scale(1.05)" : undefined,
                    }}
                  >
                    {isHub ? (
                      <div className="relative">
                        {!reduced && (
                          <div className="absolute inset-[-58px] rounded-full border border-accent/10"
                            style={{ animation: "hubPulse 4s ease-in-out infinite" }} />
                        )}
                        <Image alt="clovo logo" height={51} width={51} loading="eager" src={'/logo.svg'}/>
                        {/* <svg width="42" height="42" viewBox="-1 -1 102 102" fill="none">
                          <path d="M50 10 A20 20 0 0 1 50 50" stroke="#01D957" strokeWidth="6" strokeLinecap="round" />
                          <path d="M90 50 A20 20 0 0 1 50 50" stroke="#01D957" strokeWidth="6" strokeLinecap="round" />
                          <path d="M50 90 A20 20 0 0 1 50 50" stroke="#01D957" strokeWidth="6" strokeLinecap="round" />
                          <path d="M10 50 A20 20 0 0 1 50 50" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
                        </svg> */}
                      </div>
                    ) : (
                      <div className={`transition-colors duration-300 ${
                        isOutput               ? "text-white/50"
                        : connected || hovered ? "text-accent"
                        : isSecondary          ? "text-accent/40"
                        :                        "text-accent/60"
                      }`}>
                        <NodeIcon type={node.icon} size={isOutput ? 26 : 24} />
                      </div>
                    )}
                  </div>

                  {node.label && (
                    <span className={`text-[11px] font-mono tracking-[0.12em] uppercase transition-colors duration-300 ${
                      isOutput               ? "text-white/40"
                      : connected || hovered ? "text-accent/70"
                      : isSecondary          ? "text-white/20"
                      :                        "text-white/30"
                    }`}>
                      {node.label}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease }}
            className="flex flex-col items-center mb-8"
          >
            <div className="relative w-20 h-20 rounded-2xl bg-accent/[0.08] border border-accent/30 flex items-center justify-center"
              style={{ boxShadow: "0 0 40px rgba(1,217,87,0.15), 0 0 80px rgba(1,217,87,0.05), inset 0 0 30px rgba(1,217,87,0.05)" }}>
                                        <Image alt="clovo logo" height={51} width={51} loading="eager" src={'/logo.svg'}/>

              {/* <svg width="36" height="36" viewBox="-1 -1 102 102" fill="none">
                <path d="M50 10 A20 20 0 0 1 50 50" stroke="#01D957" strokeWidth="6" strokeLinecap="round" />
                <path d="M90 50 A20 20 0 0 1 50 50" stroke="#01D957" strokeWidth="6" strokeLinecap="round" />
                <path d="M50 90 A20 20 0 0 1 50 50" stroke="#01D957" strokeWidth="6" strokeLinecap="round" />
                <path d="M10 50 A20 20 0 0 1 50 50" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
              </svg> */}
            </div>
          </motion.div>

          <div className="w-px h-6 bg-gradient-to-b from-accent/20 to-accent/5 mx-auto mb-6" />

          <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
            {NODES.filter((n) => n.tier !== "hub" && n.tier !== "output").map((node, i) => (
              <motion.div key={node.id}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: i * 0.08, ease }}
                className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
                style={{ boxShadow: "0 0 15px rgba(1,217,87,0.03), inset 0 0 10px rgba(1,217,87,0.01)" }}>
                <div className="text-accent/50"><NodeIcon type={node.icon} size={22} /></div>
                <span className="text-[10px] font-mono text-white/30 tracking-[0.1em] uppercase">{node.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center my-5">
            <div className="w-px h-5 bg-gradient-to-b from-accent/10 to-white/10" />
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="mt-1">
              <path d="M1 1l5 5 5-5" stroke="rgba(1,217,87,0.25)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: 0.4, ease }}
            className="flex flex-col items-center gap-2 p-5 rounded-xl border border-white/[0.08] bg-white/[0.03] mx-auto max-w-[160px]"
            style={{ boxShadow: "0 0 20px rgba(255,255,255,0.02)" }}>
            <div className="text-white/50"><NodeIcon type="clients" size={24} /></div>
            <span className="text-[10px] font-mono text-white/35 tracking-[0.1em] uppercase">Clients</span>
          </motion.div>
        </div>

        {/* Perspective Grid Floor */}
        <div className="relative mt-8 sm:mt-4 h-32 sm:h-40 overflow-hidden"
          style={{ perspective: "400px", perspectiveOrigin: "50% 0%" }}>
          <div className="absolute inset-0" style={{
            transform: "rotateX(55deg)", transformOrigin: "top center",
            backgroundImage: "linear-gradient(rgba(1,217,87,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(1,217,87,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
          }} />
          <div className="absolute top-0  -translate-x-1/2 w-[1200px] h-[180] rounded-full" style={{
            background: "radial-gradient(ellipse, rgba(1,217,87,0.12) 0%, transparent 70%)",
            filter: "blur(20px)", transform: "rotateX(55deg)", transformOrigin: "top center",
          }} />
        </div>
        {/* "Our Reach" content extracted to components/LocalTrust.tsx (rendered on the homepage) */}
      </div>

      <style jsx>{`
        @keyframes hubPulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50%       { transform: scale(1.15); opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}