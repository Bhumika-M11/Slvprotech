"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AIBackground from "./AIBackground";

const slides = [
  {
    tag: "DIGITAL SOLUTIONS FOR MODERN BUSINESSES",
    heading: "Build Digital Experiences",
    highlight: "That Drive Growth",
    description:
      "From AI-powered websites and e-commerce platforms to automation and mobile applications, we create technology solutions designed around your business.",
  },
  {
    tag: "AI • WEB • MOBILE • AUTOMATION",
    heading: "Technology That",
    highlight: "Moves Business Forward",
    description:
      "Transform your ideas into fast, scalable and intelligent digital products that help your business attract customers and operate smarter.",
  },
  {
    tag: "WEB DEVELOPMENT & AI SOLUTIONS",
    heading: "Turn Your Ideas Into",
    highlight: "Digital Reality",
    description:
      "Build modern websites, applications and AI-powered solutions with a technology partner focused on performance, usability and business results.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((previous) => (previous + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-[590px] overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* AI Background */}
      <AIBackground />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-white/25" />

      {/* Main Hero */}
      <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl items-center px-6 py-0 lg:px-8">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          {/* LEFT CONTENT */}
          <div
            key={currentSlide}
            className="animate-[heroFade_0.7s_ease-in-out]"
          >
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-1.5 text-[11px] font-bold tracking-[0.15em] text-blue-700 shadow-sm backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              {slide.tag}
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-tight text-slate-950 sm:text-6xl lg:text-[64px]">
              {slide.heading}
            </h1>

            <h2 className="mt-2 max-w-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-5xl font-extrabold leading-[0.98] tracking-tight text-transparent sm:text-6xl lg:text-[64px]">
              {slide.highlight}
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-[15px] leading-6 text-slate-600 sm:text-base">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Start Your Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:text-blue-600 hover:shadow-lg"
              >
                Explore Services
              </Link>
            </div>

            {/* Trust Points */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-[10px] font-bold text-blue-600">
                  ✓
                </span>
                Business-focused
              </div>

              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-600">
                  ✓
                </span>
                Modern technology
              </div>

              <div className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-[10px] font-bold text-purple-600">
                  ✓
                </span>
                Scalable solutions
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto max-w-[500px]">
              {/* Glow */}
              <div className="absolute inset-10 rounded-[40px] bg-gradient-to-r from-blue-400/25 via-indigo-400/20 to-purple-400/25 blur-3xl" />

              {/* Dashboard */}
              <div className="relative overflow-hidden rounded-[30px] border border-white/80 bg-white/65 p-4 shadow-2xl shadow-indigo-200/50 backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-xs font-extrabold text-white">
                      S
                    </div>

                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        SLV PROTECH
                      </p>

                      <p className="text-[10px] text-slate-400">
                        Digital Solutions
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-semibold text-green-600">
                    ● Online
                  </span>
                </div>

                {/* Dashboard */}
                <div className="mt-4 rounded-2xl bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 p-4 shadow-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[10px] font-medium text-blue-200">
                        DIGITAL PERFORMANCE
                      </p>

                      <p className="mt-1 text-2xl font-extrabold text-white">
                        Smart Growth
                      </p>

                      <p className="mt-1 text-[10px] text-slate-400">
                        Technology built around your business
                      </p>
                    </div>

                    <div className="rounded-lg bg-white/10 px-2.5 py-1.5 text-[10px] font-semibold text-cyan-300">
                      AI+
                    </div>
                  </div>

                  {/* Graph */}
                  <div className="mt-5 flex h-24 items-end gap-2">
                    <div className="h-[32%] flex-1 rounded-t-md bg-blue-400/40" />
                    <div className="h-[45%] flex-1 rounded-t-md bg-blue-400/50" />
                    <div className="h-[40%] flex-1 rounded-t-md bg-indigo-400/60" />
                    <div className="h-[62%] flex-1 rounded-t-md bg-indigo-400/70" />
                    <div className="h-[72%] flex-1 rounded-t-md bg-purple-400/80" />
                    <div className="h-[90%] flex-1 rounded-t-md bg-gradient-to-t from-blue-400 to-purple-400" />
                  </div>

                  <div className="mt-2 flex justify-between text-[8px] text-slate-500">
                    <span>WEB</span>
                    <span>AI</span>
                    <span>APP</span>
                    <span>AUTO</span>
                    <span>GROWTH</span>
                  </div>
                </div>

                {/* Service Cards */}
                <div className="mt-3 grid grid-cols-3 gap-2.5">
                  <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-xs text-blue-600">
                      ✦
                    </div>

                    <p className="mt-2 text-[10px] font-bold text-slate-800">
                      AI Solutions
                    </p>
                  </div>

                  <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-100 text-xs text-indigo-600">
                      ◈
                    </div>

                    <p className="mt-2 text-[10px] font-bold text-slate-800">
                      Web Development
                    </p>
                  </div>

                  <div className="rounded-xl border border-purple-100 bg-purple-50/70 p-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-100 text-xs text-purple-600">
                      ↗
                    </div>

                    <p className="mt-2 text-[10px] font-bold text-slate-800">
                      Automation
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Support Card */}
              <div className="absolute -right-5 bottom-14 rounded-xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-md">
                <p className="text-xl font-extrabold text-slate-900">24/7</p>

                <p className="text-[10px] font-medium text-slate-500">
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-gradient-to-r from-blue-600 to-purple-500"
                : "w-1.5 bg-slate-300"
            }`}
          />
        ))}
      </div>

      {/* Hero Animation */}
      <style jsx global>{`
        @keyframes heroFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
