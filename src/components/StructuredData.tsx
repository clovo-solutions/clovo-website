export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Clovo Solutions",
    url: "https://clovo-solutions.com",
    logo: "https://clovo-solutions.com/icon-512.png",
    description:
      "Clovo Solutions helps small-to-medium businesses build high-converting websites, automate bookings, and streamline client acquisition.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@clovosolutions.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      // Add your actual social URLs here
      // "https://www.linkedin.com/company/clovo-solutions",
      // "https://www.instagram.com/clovo-solutions",
      // "https://x.com/clovo-solutions",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CY",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Clovo Solutions",
    url: "https://clovo-solutions.com",
    description:
      "Digital growth for modern businesses. High-converting websites, booking systems, automations, and client acquisition.",
    publisher: {
      "@type": "Organization",
      name: "Clovo Solutions",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Clovo Solutions",
    url: "https://clovo-solutions.com",
    description:
      "Digital agency specializing in websites, booking system integration, calendar sync, and automated client acquisition for small-to-medium businesses.",
    priceRange: "$$",
    areaServed: {
      "@type": "GeoShape",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "High-Converting Website Design & Development",
            description:
              "Custom-built websites designed to turn visitors into paying customers. Fast, responsive, and SEO-optimized.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Booking System Integration",
            description:
              "Seamless online booking flows with automated confirmations, calendar sync, and payment integration.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automated Client Acquisition",
            description:
              "Lead generation pipelines with automated follow-ups, email sequences, and CRM integration.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Calendar Synchronization",
            description:
              "Two-way calendar sync across Google Calendar, Outlook, and more with conflict detection.",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "50",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}
