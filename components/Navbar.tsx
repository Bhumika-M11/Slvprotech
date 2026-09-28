"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceItems = [
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

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="SLV PROTECH Home"
            className="group flex items-center gap-3"
          >
            {/* Footer-style circular SLV logo */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-600 bg-slate-950 text-[12px] font-bold text-blue-400 transition duration-300 group-hover:scale-105 sm:h-11 sm:w-11 lg:h-12 lg:w-12">
              SLV
            </div>

            {/* Footer-style brand name */}
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              SLV
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                PROTECH
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 lg:flex">
            {/* Home */}
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                isActive("/")
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Home
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                isActive("/about")
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="group relative">
              <Link
                href="/services"
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                  isActive("/services")
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Services
                <span className="text-xs transition-transform duration-200 group-hover:rotate-180">
                  ▾
                </span>
              </Link>

              {/* Services Dropdown */}
              <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="rounded-xl border border-blue-100 bg-white p-2 shadow-lg shadow-blue-100/40">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <Link
              href="/portfolio"
              className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                isActive("/portfolio")
                  ? "bg-blue-50 font-semibold text-blue-600"
                  : "font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              Portfolio
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              className="ml-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200"
            >
              Contact Us
              <span className="ml-1">→</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-xl text-slate-700 transition hover:bg-blue-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="border-t border-blue-100 py-5 lg:hidden">
            <div className="flex flex-col gap-2">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 transition ${
                  isActive("/")
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Home
              </Link>

              {/* About */}
              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 transition ${
                  isActive("/about")
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div className="rounded-xl border border-blue-100 bg-white p-2">
                <Link
                  href="/services"
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 font-semibold transition ${
                    isActive("/services")
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  Services
                </Link>

                <div className="mt-1 border-t border-blue-50 pt-1">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              <Link
                href="/portfolio"
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 transition ${
                  isActive("/portfolio")
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Portfolio
              </Link>

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 transition ${
                  isActive("/contact")
                    ? "bg-blue-50 font-semibold text-blue-600"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                Contact
              </Link>

              {/* Get Started */}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-6 py-3 text-center font-semibold text-white"
              >
                Get Started →
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
