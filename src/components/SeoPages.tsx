import Link from "next/link";

const pages = [
  {
    href: "/web-development-limassol",
    tag: "Limassol",
    label: "Website Development in Limassol",
  },
  {
    href: "/web-design-cyprus",
    tag: "Cyprus",
    label: "Web Design in Cyprus",
  },
  {
    href: "/seo-website-development",
    tag: "SEO",
    label: "SEO Website Development",
  },
  {
    href: "/website-cost-cyprus",
    tag: "Pricing",
    label: "Website Cost in Cyprus",
  },
  {
    href: "/best-website-development-company-limassol",
    tag: "Agency",
    label: "Best Web Agency in Limassol",
  },
  {
    href: "/website-development-clinics-cyprus",
    tag: "Healthcare",
    label: "Websites for Clinics in Cyprus",
  },
];

export default function SeoPages() {
  return (
    <section className="relative pb-28 sm:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-mono text-accent/70 tracking-[0.2em] uppercase mb-6 text-center">
          More From Clovo
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group p-5 rounded-2xl border border-white/[0.04] hover:border-accent/10 hover:bg-accent/[0.02] transition-all duration-500"
            >
              <span className="text-[11px] font-mono text-accent/70 tracking-widest uppercase">
                {page.tag}
              </span>
              <p className="font-display text-sm font-semibold text-white/70 group-hover:text-white mt-2 transition-colors flex items-center gap-2">
                {page.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className="text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all duration-300"
                >
                  <path
                    d="M1 7h12m0 0L8 2m5 5L8 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
