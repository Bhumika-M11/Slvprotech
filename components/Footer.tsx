import Link from "next/link";
import { company } from "../data/company";

export default function Footer() {
  const services = [
    {
      name: "Web Development",
      href: "/services/web-development",
    },
    {
      name: "Mobile App Development",
      href: "/services/mobile-app-development",
    },
    {
      name: "AI Development",
      href: "/services/ai-development",
    },
    {
      name: "E-Commerce Development",
      href: "/services/e-commerce-development",
    },
    {
      name: "Custom Software",
      href: "/services/custom-software",
    },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-blue-500 bg-slate-900 text-sm font-extrabold text-blue-400">
                SLV
              </div>

              <span className="text-2xl font-extrabold tracking-tight text-white">
                SLV<span className="text-blue-500">PROTECH</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Building modern digital solutions that help businesses grow,
              automate processes and create better customer experiences.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get Started →
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                href="/"
                className="block text-sm text-slate-400 transition hover:text-blue-400"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block text-sm text-slate-400 transition hover:text-blue-400"
              >
                About
              </Link>

              <Link
                href="/services"
                className="block text-sm text-slate-400 transition hover:text-blue-400"
              >
                Services
              </Link>

              <Link
                href="/portfolio"
                className="block text-sm text-slate-400 transition hover:text-blue-400"
              >
                Portfolio
              </Link>

              <Link
                href="/contact"
                className="block text-sm text-slate-400 transition hover:text-blue-400"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Services
            </h3>

            <div className="mt-5 space-y-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block text-sm text-slate-400 transition hover:text-blue-400"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Address
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {company.address}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Phone
                </p>

                <p className="mt-1 text-sm text-slate-400">{company.phone}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </p>

                <a
                  href={`mailto:${company.email}`}
                  className="mt-1 block text-sm text-slate-400 transition hover:text-blue-400"
                >
                  {company.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-sm text-slate-500">
            © 2026 SLV PROTECH. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            {/* Cookies */}
            <Link
              href="/cookies"
              className="text-slate-400 transition hover:text-blue-400"
            >
              Cookies
            </Link>

            {/* Privacy Policy */}
            <Link
              href="/privacy"
              className="text-slate-400 transition hover:text-blue-400"
            >
              Privacy Policy
            </Link>

            {/* Terms & Conditions */}
            <Link
              href="/terms"
              className="text-slate-400 transition hover:text-blue-400"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
