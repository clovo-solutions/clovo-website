import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Clovo Solutions",
  description:
    "Learn how Clovo Solutions handles your data. We respect your privacy and are committed to protecting your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main>
        <PrivacyContent />
      </main>
      <Footer />
    </>
  );
}

function PrivacyContent() {
  return (
    <section className="relative pt-36 pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[150px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="mb-16">
          <span className="inline-block text-xs font-mono text-accent/60 tracking-[0.2em] uppercase mb-4">
            Legal
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/30 text-sm">
            Last updated: April 2, 2026
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="prose-dark space-y-10">
            {/* Intro */}
            <div className="space-y-4">
              <p className="text-white/40 leading-relaxed">
                Clovo Solutions (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your
                privacy and is committed to protecting the personal data you
                share with us. This Privacy Policy explains what information we
                collect, how we use it, and what rights you have in relation to
                it.
              </p>
              <p className="text-white/40 leading-relaxed">
                This policy applies to our website{" "}
                <span className="text-accent/60">clovosolutions.com</span> and
                any services we provide.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                1. Information We Collect
              </h2>
              <p className="text-white/40 leading-relaxed">
                We keep data collection to a minimum. We may collect the
                following information only when you voluntarily provide it:
              </p>
              <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    <span className="text-white/60 font-medium">
                      Contact information
                    </span>{" "}
                    — your name, email address, and business name when you fill
                    out our contact form or book a call.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    <span className="text-white/60 font-medium">
                      Booking data
                    </span>{" "}
                    — scheduling information when you use our integrated booking
                    tool (e.g., Calendly), which is processed by the
                    third-party provider.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    <span className="text-white/60 font-medium">
                      Usage data
                    </span>{" "}
                    — anonymized, aggregate data about how visitors interact
                    with our site (e.g., pages visited, time on site), collected
                    only if analytics tools are enabled.
                  </p>
                </div>
              </div>
              <p className="text-white/40 leading-relaxed">
                We do not collect sensitive personal data such as financial
                information, health data, or government identifiers.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                2. How We Use Your Information
              </h2>
              <p className="text-white/40 leading-relaxed">
                We use the information you provide exclusively to:
              </p>
              <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Respond to your inquiries and communicate with you about our
                    services.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Schedule and manage consultation calls.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Improve our website and services based on anonymized usage
                    patterns.
                  </p>
                </div>
              </div>
              <p className="text-white/40 leading-relaxed">
                We will never sell, rent, or trade your personal information to
                third parties for marketing purposes.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                3. Cookies &amp; Third-Party Services
              </h2>
              <p className="text-white/40 leading-relaxed">
                Our website itself does not set first-party cookies. However,
                embedded third-party services may set their own cookies:
              </p>
              <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    <span className="text-white/60 font-medium">Calendly</span>{" "}
                    — used for scheduling calls. Their privacy policy applies to
                    data processed through their booking widget.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    <span className="text-white/60 font-medium">
                      Google Fonts
                    </span>{" "}
                    — fonts are loaded from Google&apos;s CDN, which may log your
                    IP address per Google&apos;s privacy policy.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    <span className="text-white/60 font-medium">
                      Analytics (if enabled)
                    </span>{" "}
                    — if we add analytics in the future, we will update this
                    policy and request your consent before any tracking begins.
                  </p>
                </div>
              </div>
              <p className="text-white/40 leading-relaxed">
                You can manage or block cookies through your browser settings at
                any time.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                4. Data Storage &amp; Security
              </h2>
              <p className="text-white/40 leading-relaxed">
                Any data you submit through our contact form is transmitted
                securely and stored only as long as necessary to fulfill the
                purpose for which it was collected. We implement reasonable
                technical and organizational measures to protect your data
                against unauthorized access, loss, or misuse.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                5. Your Rights (GDPR)
              </h2>
              <p className="text-white/40 leading-relaxed">
                Under the General Data Protection Regulation (GDPR), if you are
                located in the European Economic Area (EEA), you have the
                following rights:
              </p>
              <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    <span className="text-white/60 font-medium">
                      Right of access
                    </span>{" "}
                    — request a copy of your personal data we hold.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    <span className="text-white/60 font-medium">
                      Right to rectification
                    </span>{" "}
                    — request correction of inaccurate data.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    <span className="text-white/60 font-medium">
                      Right to erasure
                    </span>{" "}
                    — request deletion of your personal data.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    <span className="text-white/60 font-medium">
                      Right to restrict processing
                    </span>{" "}
                    — request that we limit how we use your data.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    <span className="text-white/60 font-medium">
                      Right to data portability
                    </span>{" "}
                    — request your data in a structured, machine-readable
                    format.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    <span className="text-white/60 font-medium">
                      Right to withdraw consent
                    </span>{" "}
                    — withdraw consent at any time where processing is based on
                    consent.
                  </p>
                </div>
              </div>
              <p className="text-white/40 leading-relaxed">
                To exercise any of these rights, contact us at the email address
                below.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                6. Data Retention
              </h2>
              <p className="text-white/40 leading-relaxed">
                We retain personal data only for as long as necessary to provide
                our services or as required by law. Contact form submissions are
                deleted within 12 months of the last communication unless an
                ongoing business relationship exists.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                7. Changes to This Policy
              </h2>
              <p className="text-white/40 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this page periodically.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                8. Contact Us
              </h2>
              <p className="text-white/40 leading-relaxed">
                If you have any questions about this Privacy Policy or wish to
                exercise your data rights, please contact us:
              </p>
              <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-6 space-y-2">
                <p className="text-white/50 text-sm">
                  <span className="text-white/60 font-medium">Email:</span>{" "}
                  privacy@clovosolutions.com
                </p>
                <p className="text-white/50 text-sm">
                  <span className="text-white/60 font-medium">Company:</span>{" "}
                  Clovo Solutions
                </p>
              </div>
            </div>

            {/* Back link */}
            <div className="pt-6 border-t border-white/[0.04]">
              <Link
                href="/"
                className="text-sm text-accent/50 hover:text-accent transition-colors"
              >
                ← Back to Homepage
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
