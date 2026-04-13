import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Clovo Solutions",
  description:
    "Terms and conditions for using Clovo Solutions' website and services.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main>
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}

function TermsContent() {
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
            Terms of Service
          </h1>
          <p className="text-white/30 text-sm">Last updated: April 2, 2026</p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="prose-dark space-y-10">
            {/* Intro */}
            <div className="space-y-4">
              <p className="text-white/40 leading-relaxed">
                Welcome to Clovo Solutions. By accessing or using our website
                and services, you agree to be bound by these Terms of Service.
                Please read them carefully before using our services.
              </p>
            </div>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                1. Services
              </h2>
              <p className="text-white/40 leading-relaxed">
                Clovo Solutions provides digital services including but not
                limited to: website design and development, booking system
                integration, calendar synchronization, and business automation
                solutions. The specific scope of work, deliverables, and
                timelines for each project will be agreed upon in writing before
                work begins.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                2. Use of This Website
              </h2>
              <p className="text-white/40 leading-relaxed">
                You may use this website for lawful purposes only. You agree not
                to:
              </p>
              <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Use the website in any way that violates applicable local,
                    national, or international law.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Attempt to gain unauthorized access to any part of the
                    website, server, or any connected systems.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Reproduce, duplicate, copy, or resell any part of this
                    website without express written permission.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                3. Intellectual Property
              </h2>
              <p className="text-white/40 leading-relaxed">
                All content on this website — including but not limited to text,
                graphics, logos, icons, images, code, and design — is the
                property of Clovo Solutions or its licensors and is protected by
                applicable intellectual property laws.
              </p>
              <p className="text-white/40 leading-relaxed">
                Upon full payment for a project, clients receive ownership of
                the custom deliverables created specifically for them, unless
                otherwise agreed in writing. Clovo Solutions retains the right
                to use anonymized examples of the work in portfolios and case
                studies.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                4. Client Responsibilities
              </h2>
              <p className="text-white/40 leading-relaxed">
                When engaging our services, you agree to:
              </p>
              <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Provide accurate and complete information necessary for the
                    completion of the project.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Provide timely feedback and approvals to avoid delays in
                    project delivery.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Ensure that any materials you provide (logos, images, text)
                    do not infringe on third-party intellectual property rights.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                5. Payment Terms
              </h2>
              <p className="text-white/40 leading-relaxed">
                Payment terms, including amounts, schedules, and methods, will
                be outlined in the project proposal or agreement provided before
                work begins. Unless otherwise specified:
              </p>
              <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    A deposit of 50% is required before work begins.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    The remaining balance is due upon project completion and
                    before final delivery or launch.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Late payments may incur additional fees or result in
                    suspension of services.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                6. Limitation of Liability
              </h2>
              <p className="text-white/40 leading-relaxed">
                To the maximum extent permitted by law, Clovo Solutions shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenues, whether incurred directly or indirectly, arising from
                your use of our website or services.
              </p>
              <p className="text-white/40 leading-relaxed">
                Our total liability for any claim arising from or related to our
                services shall not exceed the total amount paid by you for the
                specific service giving rise to the claim.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                7. Third-Party Services
              </h2>
              <p className="text-white/40 leading-relaxed">
                Our website and services may contain links to or integrations
                with third-party services (such as Calendly, Google Calendar, or
                payment providers). We are not responsible for the content,
                privacy practices, or terms of these external services. Your use
                of third-party services is governed by their respective terms
                and policies.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                8. Project Cancellation &amp; Refunds
              </h2>
              <p className="text-white/40 leading-relaxed">
                Either party may cancel a project with written notice. In the
                event of cancellation:
              </p>
              <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Work completed up to the date of cancellation will be billed
                    and delivered.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Deposits are non-refundable unless no work has commenced.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mt-2 flex-shrink-0" />
                  <p className="text-white/40 text-sm">
                    Any unused prepaid amount beyond work completed will be
                    refunded within 30 days.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                9. Warranties &amp; Disclaimers
              </h2>
              <p className="text-white/40 leading-relaxed">
                This website and its content are provided &quot;as is&quot; and
                &quot;as available&quot; without warranties of any kind, either
                express or implied. While we strive to keep the information
                accurate and up-to-date, we make no representations or
                warranties about the completeness, accuracy, or reliability of
                any content.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                10. Governing Law
              </h2>
              <p className="text-white/40 leading-relaxed">
                These Terms shall be governed by and construed in accordance
                with the laws of the Republic of Cyprus and the European Union,
                without regard to conflict of law principles. Any disputes
                arising under these Terms shall be subject to the exclusive
                jurisdiction of the courts of Cyprus.
              </p>
            </div>

            {/* Section 11 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                11. Changes to These Terms
              </h2>
              <p className="text-white/40 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes
                will be posted on this page with an updated revision date.
                Continued use of our website or services after changes
                constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Section 12 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-white">
                12. Contact Us
              </h2>
              <p className="text-white/40 leading-relaxed">
                If you have any questions about these Terms of Service, please
                reach out:
              </p>
              <div className="rounded-xl border border-white/[0.04] bg-white/[0.01] p-6 space-y-2">
                <p className="text-white/50 text-sm">
                  <span className="text-white/60 font-medium">Email:</span>{" "}
                  clovosolutions@gmail.com
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
