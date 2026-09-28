"use client";

const clientNames = [
  "Shiva Cabs",
  "Secure India",
  "KTS Wealth Management",
  "Tia Technology India Pvt Ltd",
  "MJN Industries",
  "Aakruthi 3D Pvt Ltd",
  "Equity Developers & Builders",
  "Siddhi Loha Pvt Ltd",
  "Brilliant's Valley International School",
  "ATEM R-TECH Solutions Pvt Ltd",
  "Smart Geniee",
  "CES Public School",
  "United Scraps",
];

export default function CTA() {
  return (
    <>
      {/* CTA SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 py-20">
        {/* Background Glow */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold tracking-[0.3em] text-blue-300">
            LET&apos;S WORK TOGETHER
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Grow
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Let&apos;s build powerful digital solutions that help your business
            attract customers, improve operations and grow faster.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 font-semibold text-slate-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Request Free Quote →
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* CLIENT / COMPANY SCROLLING STRIP */}
      <section className="overflow-hidden border-b border-slate-200 bg-white py-7">
        {/* Heading */}
        <div className="mb-5 text-center">
          <p className="text-xs font-bold tracking-[0.25em] text-slate-400">
            BUSINESSES WE WORKED WITH
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-white via-white/90 to-transparent" />

          {/* Moving Track */}
          <div className="client-marquee flex w-max items-center">
            {/* First Set */}
            <div className="flex shrink-0 items-center">
              {clientNames.map((name, index) => (
                <div
                  key={`first-${name}-${index}`}
                  className="flex shrink-0 items-center"
                >
                  <span className="mx-8 whitespace-nowrap text-lg font-bold tracking-tight text-slate-400 transition-colors duration-300 hover:text-blue-600 sm:text-xl">
                    {name}
                  </span>

                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                </div>
              ))}
            </div>

            {/* Second Identical Set */}
            <div className="flex shrink-0 items-center">
              {clientNames.map((name, index) => (
                <div
                  key={`second-${name}-${index}`}
                  className="flex shrink-0 items-center"
                >
                  <span className="mx-8 whitespace-nowrap text-lg font-bold tracking-tight text-slate-400 transition-colors duration-300 hover:text-blue-600 sm:text-xl">
                    {name}
                  </span>

                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-white via-white/90 to-transparent" />
        </div>
      </section>

      {/* MARQUEE ANIMATION */}
      <style jsx>{`
        .client-marquee {
          animation: clientScroll 32s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }

        .client-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes clientScroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>
    </>
  );
}
