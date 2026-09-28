import Link from "next/link";
import { services } from "../data/services";

const serviceImages: Record<string, string> = {
  "web-development":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",

  "mobile-app-development":
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=85",

  "ai-development": "/images/ai-development-service.jpg",

  "e-commerce-development": "/images/ecommerce-development-service.jpg",

  "custom-software":
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85",
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30 py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-blue-200/20 blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-[-100px] h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* SECTION HEADER */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Technology Solutions
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Built for Your Business
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            We build modern digital solutions that help businesses grow,
            automate operations and create better customer experiences.
          </p>
        </div>

        {/* SERVICE CARDS */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative flex min-h-[400px] flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
            >
              {/* SERVICE IMAGE */}

              <div className="relative h-36 w-full overflow-hidden">
                <img
                  src={serviceImages[service.slug]}
                  alt={`${service.title} services`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />

                {/* Number */}
                <span className="absolute right-4 top-3 text-5xl font-black text-white/80">
                  0{index + 1}
                </span>

                {/* SLV PROTECH */}
                <div className="absolute bottom-3 left-4">
                  <span className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    SLV PROTECH
                  </span>
                </div>
              </div>

              {/* CARD CONTENT */}

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {service.shortDescription}
                </p>

                {/* Explore Service */}

                <div className="mt-auto pt-7">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                    Explore Service
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>

                {/* Bottom Accent */}

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
