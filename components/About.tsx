"use client";

export default function About() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 py-10 sm:py-14">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-cyan-300/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="grid items-stretch gap-10 lg:grid-cols-2">
          {/* ================================================= */}
          {/* LEFT - VISIT OUR OFFICE */}
          {/* ================================================= */}

          <div className="flex h-full flex-col">
            <p className="text-sm font-bold tracking-[0.3em] text-blue-600">
              VISIT OUR OFFICE
            </p>

            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Come visit us
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              We would be happy to meet you and discuss how SLV PROTECH can help
              your business with reliable technology solutions, digital products
              and business-focused services.
            </p>

            {/* OFFICE DETAILS */}
            <div className="mt-7 flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-200">
                📍
              </div>

              <div>
                <h3 className="font-bold text-slate-900">SLV PROTECH</h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  69th Cross, 5th Block, Rajajinagar,
                  <br />
                  Bengaluru, Karnataka 560010, India
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="mt-7 overflow-hidden rounded-[28px] border border-blue-100 bg-white p-2 shadow-xl shadow-blue-100/40">
              <iframe
                src="https://www.google.com/maps?q=69th%20Cross%2C%205th%20Block%2C%20Rajajinagar%2C%20Bengaluru%2C%20Karnataka%20560010&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SLV PROTECH Office Location"
                className="rounded-[22px]"
              />
            </div>

            {/* FEATURE CARDS */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {/* Reliable Solutions */}
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/50">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Reliable Solutions
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Practical technology solutions designed around business
                  requirements, usability and long-term digital growth.
                </p>
              </div>

              {/* Customer Focus */}
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/50">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500" />

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Customer Focus
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We focus on understanding your goals and delivering digital
                  experiences that are clear, useful and business-focused.
                </p>
              </div>

              {/* Modern Technology */}
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/50">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Modern Technology
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Modern web, AI, application and digital technologies selected
                  according to your project requirements.
                </p>
              </div>

              {/* Scalable Approach */}
              <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-100/50">
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  Scalable Approach
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Solutions structured to support changing requirements, future
                  improvements and continued business growth.
                </p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT - ABOUT US */}
          {/* ================================================= */}

          <div className="flex h-full flex-col">
            <p className="text-sm font-bold tracking-[0.3em] text-blue-600">
              ABOUT US
            </p>

            <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Technology solutions
              <br />
              built around{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                your business
              </span>
            </h2>

            {/* SEO DESCRIPTION 1 */}
            <p className="mt-7 text-base leading-8 text-slate-600">
              SLV PROTECH is a technology and digital solutions company based in
              Bengaluru, Karnataka, focused on helping businesses build strong
              digital experiences and practical technology solutions. We work
              with businesses to create modern websites, e-commerce platforms,
              software applications and digital solutions that are designed
              around their business goals.
            </p>

            {/* SEO DESCRIPTION 2 */}
            <p className="mt-5 text-base leading-8 text-slate-600">
              Our services include{" "}
              <strong className="font-semibold text-slate-800">
                web development, AI-powered website development, e-commerce
                development, mobile app development, AI chatbots and voice bots,
                agentic AI automation, WordPress development, Shopify
                development, WooCommerce development and landing page design
              </strong>
              . We combine modern technologies with clean user experiences to
              help businesses establish their online presence and improve their
              digital operations.
            </p>

            {/* SEO DESCRIPTION 3 */}
            <p className="mt-5 text-base leading-8 text-slate-600">
              We understand that every business has different requirements. That
              is why our approach focuses on understanding your objectives,
              identifying the right technology and developing solutions that are
              practical, responsive and scalable. From a business website or
              online store to custom software, AI integration and digital
              marketing solutions, we aim to create technology that provides
              meaningful value to your business.
            </p>

            {/* SEO DESCRIPTION 4 */}
            <p className="mt-5 text-base leading-8 text-slate-600">
              Located in Rajajinagar, Bengaluru, SLV PROTECH works with
              businesses looking for reliable web development and digital
              technology solutions. Our goal is to make technology easier to
              use, easier to manage and better aligned with the way your
              business operates.
            </p>

            {/* Bottom alignment area */}
            <div className="mt-auto pt-6">
              <div className="h-px w-full bg-gradient-to-r from-blue-200 via-indigo-200 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
