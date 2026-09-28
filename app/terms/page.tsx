import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        {/* Header */}
        <section className="border-b border-blue-100 bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <p className="text-sm font-bold tracking-[0.25em] text-blue-600">
              LEGAL
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Terms &{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              Please read these terms and conditions carefully before using the
              SLV PROTECH website or engaging with our services.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="space-y-10">
                {/* 1 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    1. Acceptance of Terms
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    By accessing or using the SLV PROTECH website, you agree to
                    comply with and be bound by these Terms & Conditions. If you
                    do not agree with any part of these terms, please do not use
                    our website or services.
                  </p>
                </section>

                {/* 2 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    2. Our Services
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    SLV PROTECH provides technology and digital solutions
                    including web development, mobile app development, AI
                    development, e-commerce development and custom software
                    development.
                  </p>

                  <p className="mt-3 leading-7 text-slate-600">
                    Specific project requirements, timelines, deliverables,
                    pricing and other conditions may be agreed upon separately
                    between SLV PROTECH and the client.
                  </p>
                </section>

                {/* 3 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    3. Website Usage
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    You agree to use this website only for lawful purposes. You
                    must not use the website in a way that could damage,
                    disable, overburden or interfere with its operation or
                    security.
                  </p>
                </section>

                {/* 4 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    4. Intellectual Property
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Unless otherwise stated, the content, design, branding,
                    graphics, text and other materials available on this website
                    are owned by or used by SLV PROTECH and may not be copied,
                    reproduced, modified or distributed without appropriate
                    permission.
                  </p>
                </section>

                {/* 5 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    5. Project Information
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Information provided through our website, including service
                    descriptions and general project information, is provided
                    for informational purposes. Final project specifications and
                    commitments will be determined through communication between
                    SLV PROTECH and the client.
                  </p>
                </section>

                {/* 6 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    6. Third-Party Services
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Our services may involve third-party platforms, APIs,
                    hosting providers, payment services or other external
                    technologies. Their availability and terms may be governed
                    by the respective third-party providers.
                  </p>
                </section>

                {/* 7 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    7. Limitation of Liability
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    To the extent permitted by applicable law, SLV PROTECH shall
                    not be responsible for losses arising from misuse of the
                    website, interruptions caused by circumstances outside our
                    reasonable control, or reliance on general information
                    provided through the website.
                  </p>
                </section>

                {/* 8 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    8. Changes to These Terms
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    SLV PROTECH may update these Terms & Conditions from time to
                    time. Any updated version may be published on this page. You
                    should review this page periodically for changes.
                  </p>
                </section>

                {/* 9 */}
                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    9. Contact Us
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    If you have any questions regarding these Terms &
                    Conditions, please contact SLV PROTECH through the contact
                    information provided on our website.
                  </p>
                </section>

                {/* Last Updated */}
                <div className="border-t border-blue-100 pt-6">
                  <p className="text-sm text-slate-500">
                    Last updated: September 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
