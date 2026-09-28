"use client";

import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const projects = [
  {
    company: "Shiva Cabs",
    category: "Web Development",
    title: "Taxi Booking Website",
    description:
      "A responsive digital platform for cab services with booking information, service details and customer-focused navigation.",
    tags: ["Booking", "Responsive", "Business"],
    theme: "blue",
    logo: "/images/tia-logo.png",
  },
  {
    company: "Tia Technology India Pvt Ltd",
    category: "Software Solution",
    title: "Business Software",
    description:
      "A technology solution designed around internal business operations, workflows and information management.",
    tags: ["Software", "Workflow", "Operations"],
    theme: "dark",
    logo: "/images/tia-logo.png",
  },

  {
    company: "CES Public School",
    category: "Web Development",
    title: "Educational Website",
    description:
      "A responsive educational website designed to showcase the school, academic programs, facilities, student activities and important information for parents and students.",
    tags: ["Education", "Responsive", "Students"],
    theme: "blue",
    logo: "/images/ces-logo.png",
  },

  {
    company: "MJN Industries",
    category: "Web Development",
    title: "Industrial Business Website",
    description:
      "A professional company website showcasing products, services, capabilities and business information.",
    tags: ["Industry", "Products", "Business"],
    theme: "orange",
    logo: "/images/MJN-logo.png",
  },

  {
    company: "KTS Wealth",
    category: "Web Development",
    title: "Financial Services Website",
    description:
      "An informative digital presence for communicating financial, investment and wealth management services.",
    tags: ["Finance", "Investment", "Corporate"],
    theme: "cyan",
    logo: "/images/KTS-logo.png",
  },

  {
    company: "Aakruthi 3D Pvt Ltd",
    category: "Web Development",
    title: "3D Printing Website",
    description:
      "A technology-focused website presenting 3D printing capabilities, applications and business solutions.",
    tags: ["3D Printing", "Technology", "Services"],
    theme: "cyan",
    logo: "/images/Aakruthi-logo.png",
  },
  {
    company: "Equity Developers & Builders",
    category: "Web Development",
    title: "Real Estate Website",
    description:
      "A property-focused digital presence presenting projects, company information and customer enquiry opportunities.",
    tags: ["Real Estate", "Projects", "Property"],
    theme: "blue",
    logo: "/images/Equity-logo.png",
  },
  {
    company: "Siddhi Loha Pvt Ltd",
    category: "Web Development",
    title: "Industrial Website",
    description:
      "A structured website designed to communicate industrial products, capabilities and company information.",
    tags: ["Industrial", "Products", "Corporate"],
    theme: "dark",
    logo: "/images/siddhiloha-logo.png",
  },
  {
    company: "Brilliant's Valley International School",
    category: "Web Development",
    title: "School Website",
    description:
      "A modern educational website presenting school information, admissions, announcements and institutional content.",
    tags: ["Education", "Admissions", "School"],
    theme: "purple",
    logo: "/images/Brilliants-logo.png",
  },
  {
    company: "ATEM R-TECH Solutions Pvt Ltd",
    category: "Software Solution",
    title: "Business Application",
    description:
      "A business-oriented digital solution focused on information management and operational workflows.",
    tags: ["Application", "Business", "Workflow"],
    theme: "orange",
    logo: "/images/RTech-logo.png",
  },

  {
    company: "United Scraps",
    category: "Web Development",
    title: "Scrap Management Website",
    description:
      "A professional website designed to showcase scrap management services, recycling solutions, company information and customer enquiries.",
    tags: ["Recycling", "Scrap", "Business"],
    theme: "green",
    logo: "/images/unitedscraps-logo.png",
  },
  {
    company: "Smart Geniee",
    category: "Digital Marketing",
    title: "Digital Growth Solution",
    description:
      "A digital marketing solution focused on online visibility, social media presence and brand communication.",
    tags: ["SEO", "Social Media", "Growth"],
    theme: "green",
    logo: "/images/smartgeniee-logo.png",
  },
];

const themes: Record<
  string,
  {
    gradient: string;
    glow: string;
    accent: string;
  }
> = {
  blue: {
    gradient: "from-blue-600 via-indigo-500 to-violet-500",
    glow: "bg-blue-300",
    accent: "text-blue-600",
  },
  dark: {
    gradient: "from-slate-950 via-indigo-950 to-blue-900",
    glow: "bg-indigo-400",
    accent: "text-indigo-600",
  },
  purple: {
    gradient: "from-fuchsia-500 via-purple-500 to-indigo-600",
    glow: "bg-purple-300",
    accent: "text-purple-600",
  },
  cyan: {
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
    glow: "bg-cyan-300",
    accent: "text-cyan-600",
  },
  green: {
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    glow: "bg-emerald-300",
    accent: "text-emerald-600",
  },
  orange: {
    gradient: "from-orange-500 via-pink-500 to-purple-600",
    glow: "bg-orange-300",
    accent: "text-orange-600",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-slate-50">
        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-6 pb-14 pt-10 sm:pb-16 sm:pt-14 lg:px-8">
          <div className="pointer-events-none absolute -left-32 -top-20 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-purple-300/15 blur-3xl" />

          <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-xs font-bold tracking-[0.2em] text-blue-600 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                OUR WORK
              </div>

              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Ideas we&apos;ve turned into
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  digital experiences.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                From business websites and e-commerce platforms to software
                solutions and digital growth, explore the work created for
                businesses across different industries.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* PORTFOLIO */}
        {/* ================================================= */}

        <section className="bg-gradient-to-br from-slate-50 via-blue-50/40 to-cyan-50/40 px-6 py-12 sm:py-16 lg:px-8">
          <div className="mx-auto grid max-w-6xl items-stretch gap-7 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => {
              const theme = themes[project.theme];

              return (
                <article
  key={project.company}
  className="group relative flex h-[415px] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-200/30"
>
  {/* VISUAL HEADER */}
  <div
  className="relative h-[155px] shrink-0 overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900"
>

    {/* Company Logo */}
    {project.logo ? (
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <img
          src={project.logo}
          alt={`${project.company} logo`}
          className="absolute inset-0 h-full w-full object-fit"
        />
      </div>
    ) : (
      <div className="absolute inset-0 flex items-end px-4 pb-4">
        <div className="w-full rounded-xl border border-white/20 bg-white/10 p-2.5 backdrop-blur-md">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />

            <div className="ml-auto h-1.5 w-10 rounded-full bg-white/20" />
          </div>

          <div className="flex items-end gap-1.5">
            <div className="h-3 flex-1 rounded bg-white/20" />
            <div className="h-6 flex-1 rounded bg-white/30" />
            <div className="h-4 flex-1 rounded bg-white/20" />
            <div className="h-8 flex-1 rounded bg-white/40" />
            <div className="h-5 flex-1 rounded bg-white/30" />
          </div>
        </div>
      </div>
    )}

    {/* Category Badge */}
    <span className="absolute right-3 top-3 max-w-[150px] truncate rounded-full border border-white/20 bg-white/15 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md">
      {project.category}
    </span>
  </div>

  {/* CONTENT */}
  <div className="flex flex-1 flex-col p-4.5">
    {/* Category */}
    <p
      className={`text-[10px] font-bold uppercase tracking-[0.16em] ${theme.accent}`}
    >
      {project.category}
    </p>

    {/* Company */}
    <h2 className="mt-1.5 min-h-[48px] text-lg font-black leading-tight text-slate-950">
      {project.company}
    </h2>

    {/* Project Title */}
    <h3 className="mt-1.5 text-sm font-bold text-slate-800">
      {project.title}
    </h3>

    {/* Description */}
    <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-600">
      {project.description}
    </p>

    {/* Tags */}
    <div className="mt-3 flex flex-wrap gap-1.5">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-500"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Bottom Accent */}
    <div className="mt-auto flex items-center gap-2 pt-4">
      <div
        className={`h-0.5 flex-1 rounded-full bg-gradient-to-r ${theme.gradient} opacity-20 transition-all duration-500 group-hover:opacity-100`}
      />

      <span
        className={`text-lg font-bold ${theme.accent} transition-transform duration-300 group-hover:translate-x-1`}
      >
        →
      </span>
    </div>
  </div>
</article>

              );
            })}
          </div>
        </section>

        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 px-6 py-16 lg:px-8">
          <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-bold tracking-[0.3em] text-blue-300">
              LET&apos;S CREATE
            </p>

            <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
              Your next digital
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                experience starts here.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
              Have an idea, business requirement or digital project? Let&apos;s
              discuss how we can turn it into a practical solution.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 font-bold text-slate-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
            >
              Start Your Project →
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
