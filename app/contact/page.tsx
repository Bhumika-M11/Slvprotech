"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";
import { company } from "../../data/company";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("");
    setErrors({
      email: "",
      phone: "",
    });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    const newErrors = {
      email: emailRegex.test(formData.email)
        ? ""
        : "Please enter a valid email address.",
      phone: phoneRegex.test(formData.phone)
        ? ""
        : "Please enter a valid 10-digit phone number.",
    };

    if (newErrors.email || newErrors.phone) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus(
          "Thank you for contacting us, our team will reach out to you shortly.",
        );

        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Unable to submit your enquiry.");
      }
    } catch (error) {
      console.error("Form submission error:", error);

      setStatus("Unable to connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 px-6 pb-12 pt-12 lg:px-8 lg:pb-14">
          <div className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            {/* Hero */}
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-5 py-2 text-xs font-bold tracking-[0.18em] text-blue-700 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                CONTACT SLV PROTECH
              </div>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  great together.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                Have a project, business requirement, or digital idea? Tell us
                what you need and let&apos;s create the right digital solution
                for your business.
              </p>
            </div>

            {/* Main Contact Area */}
            <div className="mt-10 grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
              {/* Left Contact Information */}
              <div className="relative overflow-hidden rounded-[28px] border border-blue-100 bg-white p-8 shadow-lg shadow-blue-100/50 sm:p-9">
                <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-100/50 blur-3xl" />

                <div className="relative">
                  <p className="text-sm font-bold tracking-[0.2em] text-blue-600">
                    LET&apos;S TALK
                  </p>

                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                    Start your digital journey
                  </h2>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    Tell us about your business or project. Our team can help
                    you choose the right technology and solution.
                  </p>

                  <div className="mt-8 space-y-4">
                    {/* Email */}
                    <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
                          <path d="m22 6-10 7L2 6" />
                        </svg>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-500">
                          Email
                        </p>
                        <p className="mt-1 break-all text-base font-bold text-slate-900">
                          {company.email}
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
                        </svg>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-500">
                          Phone
                        </p>
                        <p className="mt-1 text-base font-bold text-slate-900">
                          {company.phone}
                        </p>
                      </div>
                    </div>

                    {/* Office */}
                    <div className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
                        <svg
                          width="21"
                          height="21"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                          <circle cx="12" cy="10" r="2.5" />
                        </svg>
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-500">
                          Office
                        </p>
                        <p className="mt-1 text-base font-bold leading-6 text-slate-900">
                          69th Cross, 5th Block,
                          <br />
                          Rajajinagar, Bangalore
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-5">
                    <div>
                      <p className="text-base font-bold text-white">
                        Have a project in mind?
                      </p>
                      <p className="mt-1 text-sm text-blue-100">
                        Let&apos;s discuss your requirements.
                      </p>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-xl text-white">
                      →
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="rounded-[28px] border border-blue-100 bg-white p-8 shadow-lg shadow-indigo-100/40 sm:p-9">
                <p className="text-sm font-bold tracking-[0.2em] text-indigo-600">
                  SEND AN ENQUIRY
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                  Tell us about your project
                </h2>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  Share a few details and our team can understand your
                  requirement better.
                </p>

                <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                  {/* Name + Phone */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    {/* Name */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-800">
                        Your Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        placeholder="Enter your name"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-sm font-bold text-slate-800">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        placeholder="Enter phone number"
                        required
                        maxLength={10}
                        className={`w-full rounded-xl border bg-slate-50 px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                          errors.phone
                            ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                            : "border-slate-200 focus:border-indigo-400 focus:ring-indigo-100"
                        }`}
                      />

                      {errors.phone && (
                        <p className="mt-1.5 text-sm font-medium text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-800">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      placeholder="Enter your email address"
                      required
                      className={`w-full rounded-xl border bg-slate-50 px-4 py-3.5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
                        errors.email
                          ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                          : "border-slate-200 focus:border-blue-400 focus:ring-blue-100"
                      }`}
                    />

                    {errors.email && (
                      <p className="mt-1.5 text-sm font-medium text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-800">
                      Required Service
                    </label>

                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          service: e.target.value,
                        })
                      }
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-700 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>

                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>AI Development</option>
                      <option>E-Commerce Development</option>
                      <option>Custom Software</option>
                      <option>Other Requirement</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-800">
                      Project Details
                    </label>

                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      placeholder="Tell us about your project or requirement..."
                      required
                      className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base leading-7 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
                    />
                  </div>

                  {/* Status Message */}
                  {status && (
                    <p
                      className={`rounded-xl px-4 py-3 text-center text-sm font-semibold ${
                        status.startsWith("Thank you")
                          ? "bg-green-50 text-green-700"
                          : "bg-red-50 text-red-700"
                      }`}
                    >
                      {status}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-indigo-200/50 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Project Enquiry"}

                    {!isSubmitting && (
                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </button>

                  <p className="text-center text-sm text-slate-500">
                    We&apos;ll use your details only to respond to your enquiry.
                  </p>
                </form>
              </div>
            </div>

            {/* Services Link */}
            <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-white px-6 py-5 shadow-sm sm:flex-row">
              <div>
                <p className="text-base font-bold text-slate-900">
                  Looking for a specific digital solution?
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Explore all services offered by SLV PROTECH.
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-bold text-blue-600 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
              >
                Explore Services →
              </Link>
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </>
  );
}
