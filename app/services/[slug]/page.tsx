import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { services, getServiceBySlug } from "../../../data/services";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/* -------------------------------------------------------
   SERVICE IMAGES
------------------------------------------------------- */

const serviceImages: Record<string, string> = {
  "web-development":
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",

  "mobile-app-development":
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=85",

  "ai-development":
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",

  "e-commerce-development":
    "https://cdn.dribbble.com/userupload/8491500/file/original-898a5dae48175c52aac2253d899d8c7e.jpg",

  "custom-software":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl9ZUzPfcT6HxnXM2ueY60KIVZomHraqeAcNbDyKKPLqp-0s8SFpfAH075&s=10",
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const serviceImage =
    serviceImages[service.slug] ||
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85";

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/30">
        {/* ================================================= */}
        {/* HERO */}
        {/* ================================================= */}

        <section className="relative overflow-hidden border-b border-blue-100 py-10 sm:py-14 lg:py-16">
          {/* Background Glow */}
          <div className="pointer-events-none absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-blue-200/20 blur-3xl" />

          <div className="pointer-events-none absolute right-[-120px] top-20 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-blue-600">
                Home
              </Link>

              <span>/</span>

              <Link href="/services" className="transition hover:text-blue-600">
                Services
              </Link>

              <span>/</span>

              <span className="font-medium text-slate-700">
                {service.title}
              </span>
            </div>

            {/* Hero Content */}
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
              {/* LEFT */}
              <div>
                <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  {service.title}
                  <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    Services
                  </span>
                </h1>

                <p className="mt-7 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  {service.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200/50 transition hover:-translate-y-0.5"
                  >
                    Get a Free Quote →
                  </Link>

                  <Link
                    href="/services"
                    className="rounded-full border border-blue-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="relative">
                <div className="absolute inset-4 rounded-[32px] bg-gradient-to-r from-blue-300/30 via-indigo-300/20 to-purple-300/30 blur-3xl" />

                <div className="relative overflow-hidden rounded-[30px] border-[10px] border-white bg-white shadow-2xl shadow-indigo-200/40">
                  <img
                    src={serviceImage}
                    alt={`${service.title} services`}
                    className="h-[360px] w-full object-cover sm:h-[410px]"
                  />

                  {/* Image Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-slate-950/55 px-6 py-5 backdrop-blur-md">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                      SLV PROTECH
                    </p>

                    <p className="mt-1 text-lg font-bold text-white">
                      Technology Solutions Built for Business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* SUB SERVICES */}
        {/* ================================================= */}

        {service.subServices && service.subServices.length > 0 && (
          <section className="py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mb-12 max-w-3xl">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  What We Offer
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  {service.title} Solutions
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Explore the different solutions we can build based on your
                  business requirements.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {service.subServices.map((item, index) => (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-blue-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-sm font-extrabold text-blue-600">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ================================================= */}
        {/* CAPABILITIES */}
        {/* ================================================= */}

        <section className="border-y border-blue-100 bg-white/70 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-2">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Capabilities
                </span>

                <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                  What We Can Build
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Our solutions are designed around practical business
                  requirements, scalability and a strong user experience.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50/40 px-5 py-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      ✓
                    </span>

                    <span className="text-sm font-semibold text-slate-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* BENEFITS */}
        {/* ================================================= */}

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Benefits
              </span>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                Built to Support Your Business
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {service.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-3xl border border-blue-100 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    ✓
                  </div>

                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-700">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <section className="px-6 pb-20 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-14 text-center shadow-xl shadow-blue-200/40">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Have a Project in Mind?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
              Tell us what you want to build and our team can help you plan the
              right technology solution for your business.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition hover:-translate-y-0.5"
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
