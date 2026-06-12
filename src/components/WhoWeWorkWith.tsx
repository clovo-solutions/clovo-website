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
      className="relative py-6 border-y border-white/[0.04] bg-white/[0.01]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-sm text-white/40">
          <span className="font-medium text-white/70">
            Built for businesses like yours:
          </span>
          {types.map((t) => (
            <span key={t.label} className="flex items-center gap-1.5">
              <span aria-hidden="true">{t.emoji}</span>
              <span>{t.label}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
