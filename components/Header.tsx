"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/90 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-sm font-extrabold text-white shadow-md shadow-blue-200/60 transition duration-300 group-hover:scale-105">
            SP
          </div>

          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            SLV
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
              .PROTECH
            </span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition-all duration-200 hover:bg-blue-100"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/services"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
          >
            Services
          </Link>

          <Link
            href="/portfolio"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
          >
            Portfolio
          </Link>
        </nav>

        {/* Get Started */}
        <Link
          href="/contact"
          className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-200/60 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200"
        >
          Contact Us
          <span className="ml-1">→</span>
        </Link>
      </div>
    </header>
  );
}
