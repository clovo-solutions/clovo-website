const types = [
  { emoji: "🦷", label: "Clinics & doctors" },
  { emoji: "🍽️", label: "Restaurants & cafés" },
  { emoji: "💇", label: "Salons & studios" },
  { emoji: "🔧", label: "Trades & services" },
  { emoji: "🏢", label: "Local companies" },
];

export default function WhoWeWorkWith() {
  return (
    <section
      id="who-we-work-with"
      className="relative hidden sm:block py-10 sm:py-6 border-y border-white/[0.04] bg-white/[0.01]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-wider text-white/40 mb-5 sm:mb-4">
          Built for businesses like yours
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {types.map((t) => (
            <span
              key={t.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-3.5 py-1.5 text-sm text-white/60"
            >
              <span aria-hidden="true" className="text-[0.95em] leading-none">
                {t.emoji}
              </span>
              <span className="whitespace-nowrap">{t.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
