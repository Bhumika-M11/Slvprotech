import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CookiesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-sm sm:p-12">
              <p className="text-sm font-bold tracking-[0.25em] text-blue-600">
                COOKIE POLICY
              </p>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Cookies Policy
              </h1>

              <p className="mt-4 text-sm text-slate-500">
                Last updated: September 2026
              </p>

              <div className="mt-10 space-y-8 text-slate-600">
                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    1. What Are Cookies?
                  </h2>
                  <p className="mt-3 leading-7">
                    Cookies are small text files stored on your device when you
                    visit a website. They help websites function properly,
                    remember preferences, and understand how visitors use the
                    website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    2. How We Use Cookies
                  </h2>
                  <p className="mt-3 leading-7">
                    SLV PROTECH may use cookies to improve website
                    functionality, understand website usage, remember user
                    preferences, and provide a better browsing experience.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    3. Types of Cookies
                  </h2>

                  <div className="mt-4 space-y-4">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="font-bold text-slate-900">
                        Essential Cookies
                      </h3>
                      <p className="mt-2 leading-7">
                        These cookies may be necessary for certain website
                        functions and basic operation.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="font-bold text-slate-900">
                        Preference Cookies
                      </h3>
                      <p className="mt-2 leading-7">
                        These cookies may help remember preferences and settings
                        to provide a more convenient experience.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="font-bold text-slate-900">
                        Analytics Cookies
                      </h3>
                      <p className="mt-2 leading-7">
                        These cookies may be used to understand website traffic
                        and how visitors interact with our website.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    4. Managing Cookies
                  </h2>
                  <p className="mt-3 leading-7">
                    You can manage or disable cookies through your browser
                    settings. Disabling certain cookies may affect some website
                    functionality.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    5. Third-Party Services
                  </h2>
                  <p className="mt-3 leading-7">
                    If third-party services are integrated into our website,
                    those services may use their own cookies or similar
                    technologies according to their respective policies.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    6. Updates to This Policy
                  </h2>
                  <p className="mt-3 leading-7">
                    We may update this Cookies Policy from time to time to
                    reflect changes to our website, services, or applicable
                    practices.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-slate-900">
                    7. Contact Us
                  </h2>
                  <p className="mt-3 leading-7">
                    If you have questions about this Cookies Policy, you can
                    contact SLV PROTECH through our contact page.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                  >
                    Contact Us →
                  </Link>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
