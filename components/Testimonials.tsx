"use client";

import { useEffect, useState } from "react";

  const clients = [
  {
    company: "Shiva Cabs",
    service: "Web Development",
    description:
      "A responsive digital platform created for cab booking services. The website focuses on clear service information, easy navigation and a smooth customer experience.",
    logo: "/images/shiva-cabs-logo.png",
  },

  {
    company: "Tia Technology India Pvt Ltd",
    service: "Software Solutions",
    description:
      "A technology-focused digital solution designed around business requirements and operational workflows. The solution helps present services and support the company's digital presence.",
    logo: "/images/tia-logo.png",
  },

  {
    company: "KTS Wealth",
    service: "Web Development",
    description:
      "A clean and informative website created for financial and wealth management services. The design focuses on presenting investment information in a professional and easy-to-understand format.",
    logo: "/images/KTS-logo.png",
  },

  {
    company: "MJN Industries",
    service: "Business Website",
    description:
      "A modern business website designed to showcase company information, products and services. The structure provides visitors with a clear understanding of the business and its offerings.",
    logo: "/images/mjn-logo.png",
  },

  {
    company: "Aakruthi 3D Pvt Ltd",
    service: "Digital Solutions",
    description:
      "A modern digital presence designed to communicate the company's capabilities and services. The website focuses on professional presentation and an engaging user experience.",
    logo: "/images/Aakruthi-logo.png",
  },

  {
    company: "Equity Developers & Builders",
    service: "Business Website",
    description:
      "A business-focused website designed to present projects, company information and property-related services. The layout helps visitors explore the company's offerings in a structured way.",
    logo: "/images/equity-logo.png",
  },

  {
    company: "United Scraps",
    service: "Business Website",
    description:
    "A professional website designed to showcase scrap management services, recycling solutions, company information and customer enquiries.",
   logo: "/images/unitedscraps-logo.png",
  },

  {
    company: "CES",
    service: "Website Development",
    description:
    "A responsive educational website designed to showcase the school, academic programs, facilities, student activities and important information for parents and students.",
  logo: "/images/ces-logo.png",
  },

 

  {
    company: "Siddhi Loha Pvt Ltd",
    service: "Web Development",
    description:
      "A professional online platform designed to showcase company information, products and services. The website provides a structured digital presence for business enquiries and customer engagement.",
    logo: "/images/siddhiloha-logo.png",
  },

  {
    company: "Brilliant's Valley International School",
    service: "Website Development",
    description:
      "A school website designed to present programs, facilities, activities and important information. The structure makes it easier for students, parents and visitors to explore the institution online.",
    logo: "/images/Brilliants-logo.png",
  },

  {
    company: "ATEM R-TECH Solutions Pvt Ltd",
    service: "Technology Solutions",
    description:
      "A technology-oriented digital solution designed to communicate business services and capabilities. The platform focuses on presenting information clearly while supporting the company's online presence.",
    logo: "/images/RTech-logo.png",
  },

  {
    company: "Smart Geniee",
    service: "Digital Solutions",
    description:
      "A modern digital solution designed to present services in a simple and user-friendly way. The experience focuses on clear communication, easy navigation and customer engagement.",
    logo: "/images/smartgeniee-logo.png",
  },


];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const cardsPerView = 3;
  const maxIndex = clients.length - cardsPerView;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev >= maxIndex) {
          return 0;
        }

        return prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [maxIndex]);


  
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ============================= */}
        {/* SECTION HEADER */}
        {/* ============================= */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.3em] text-blue-600">
            OUR CLIENTS
          </p>

          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Businesses We{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            We work with businesses across different industries to create
            websites, software solutions and digital experiences that support
            their business goals.
          </p>
        </div>

        {/* ============================= */}
        {/* CAROUSEL */}
        {/* ============================= */}

        <div className="mt-10 overflow-hidden">
          <div
            className="flex items-stretch transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / cardsPerView)}%)`,
            }}
          >
            {clients.map((client) => (
              <div
                key={client.company}
                className="flex w-full shrink-0 px-3 sm:w-1/2 lg:w-1/3"
              >
                {/* CARD */}
                <div className="mx-auto flex h-[350px] w-full max-w-[360px] flex-col rounded-[24px] border border-blue-100 bg-white p-6 shadow-md shadow-blue-100/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/50">
                  {/* TOP ROW */}
                  <div className="flex items-center justify-between gap-3">
                    {/* Company Initial */}
                    {/* Company Logo / Initial */}
<div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
  {client.logo ? (
    <img
      src={client.logo}
      alt={`${client.company} logo`}
      className="h-full w-full object-contain"
    />
  ) : (
    <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-500 text-lg font-extrabold text-white">
      {client.company.charAt(0)}
    </div>
  )}
</div>

                    {/* Service */}
                    <span className="max-w-[190px] truncate rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-600">
                      {client.service}
                    </span>
                  </div>

                  {/* COMPANY NAME */}
                  <h3 className="mt-6 min-h-[56px] text-xl font-extrabold leading-tight text-slate-950">
                    {client.company}
                  </h3>

                  {/* Accent Line */}
                  <div className="mt-4 h-1 w-12 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

                  {/* DESCRIPTION */}
                  <p className="mt-5 line-clamp-3 text-sm leading-7 text-slate-600">
                    {client.description}
                  </p>

                  {/* BOTTOM */}
                  <div className="mt-auto pt-7">
                    <div className="border-t border-slate-100 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold tracking-[0.2em] text-slate-400">
                          SLV PROTECH
                        </span>

                        <span className="text-lg font-semibold text-blue-500 transition-transform duration-300 hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================= */}
        {/* SLIDER DOTS */}
        {/* ============================= */}

        <div className="mt-7 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Show client group ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 bg-gradient-to-r from-blue-600 to-purple-500"
                  : "w-2 bg-slate-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
