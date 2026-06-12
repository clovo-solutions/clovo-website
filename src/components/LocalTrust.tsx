const stats = [
  { value: "SEO", label: "Your clients find you on Google" },
  { value: "Speed", label: "Loads instantly — even on a phone" },
  { value: "CY", label: "A local team you can actually meet" },
];

/* Server-rendered, indexable — this copy carries local SEO weight. */
export default function LocalTrust() {
  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-accent/15 bg-accent/[0.04] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-60" aria-hidden />
          <span className="text-[11px] font-mono text-accent/60 tracking-[0.18em] uppercase">
            Based in Cyprus
          </span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[-0.03em] text-white mb-6">
          Built for <span className="gradient-text">Businesses in Cyprus</span>
        </h2>

        <p className="text-lg sm:text-xl text-white/50 leading-relaxed font-light max-w-2xl mx-auto mb-12">
          Clovo Solutions is a web design and development agency helping businesses in{" "}
          <span className="text-white/80 font-medium">Limassol</span>,{" "}
          <span className="text-white/80 font-medium">Nicosia</span>,{" "}
          <span className="text-white/80 font-medium">Paphos</span>, and across the island
          build websites that actually generate clients.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-px sm:gap-0 rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden max-w-2xl mx-auto mb-12">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="flex-1 w-full sm:w-auto flex flex-col items-center gap-1.5 px-6 py-5 border-b sm:border-b-0 sm:border-r border-white/[0.06] last:border-0"
            >
              <span className="font-mono text-accent/80 text-lg font-semibold tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-white/40 leading-relaxed">{stat.label}</span>
            </div>
          ))}
        </div>

        <p className="text-sm sm:text-base text-white/30 leading-relaxed max-w-xl mx-auto">
          One team handles your website, your Google ranking, and your bookings — so you
          never have to chase three different suppliers.
        </p>
      </div>
    </section>
  );
}
