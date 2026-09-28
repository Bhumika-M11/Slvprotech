import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        {/* Header */}
        <section className="border-b border-blue-100 bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                LEGAL
              </p>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Privacy Policy
              </h1>

              <p className="mt-5 text-base leading-7 text-slate-600">
                Your privacy is important to us. This Privacy Policy explains
                how SLV PROTECH collects, uses and protects information when you
                use our website and services.
              </p>

              <p className="mt-3 text-sm text-slate-500">
                Last updated: September 2026
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm sm:p-10">
              <div className="space-y-10">
                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    1. Information We Collect
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    When you contact us or use our website, we may collect
                    information such as your name, email address, phone number
                    and information you provide about your business or project
                    requirements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    2. How We Use Your Information
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    We may use the information you provide to respond to
                    enquiries, understand your requirements, provide requested
                    services, communicate with you and improve our website and
                    services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    3. Contact Forms
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Information submitted through our contact forms may be used
                    by SLV PROTECH to respond to your enquiry. We may also send
                    a confirmation or acknowledgement email after receiving your
                    request.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    4. Data Protection
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    We take reasonable measures to protect the information
                    provided to us against unauthorized access, misuse or
                    disclosure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    5. Third-Party Services
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Our website may use third-party services or technologies
                    that support website functionality, analytics, hosting,
                    communication or other business operations. These services
                    may process information according to their own privacy
                    policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    6. Cookies
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    Our website may use cookies or similar technologies to
                    improve functionality and understand how visitors interact
                    with the website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    7. Your Information
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    If you have questions about the information you have
                    provided to us or would like to request clarification about
                    how it is used, you can contact SLV PROTECH using the
                    contact details provided on our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    8. Changes to This Privacy Policy
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    We may update this Privacy Policy from time to time to
                    reflect changes to our website, services or business
                    practices. Any updates will be published on this page.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    9. Contact Us
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    If you have any questions regarding this Privacy Policy,
                    please contact us.
                  </p>

                  <div className="mt-5 rounded-2xl bg-blue-50/60 p-5">
                    <p className="font-semibold text-slate-900">SLV PROTECH</p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      69th Cross, 5th Block, Rajajinagar, Bangalore
                    </p>

                    <p className="mt-1 text-sm text-blue-600">
                      info@slvprotech.com
                    </p>
                  </div>
                </section>

                <div className="border-t border-slate-100 pt-8">
                  <Link
                    href="/"
                    className="inline-flex rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200/50 transition hover:-translate-y-0.5"
                  >
                    ← Back to Home
                  </Link>
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
