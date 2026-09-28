const stats = [
  {
    number: "100+",
    label: "Projects Delivered",
  },
  {
    number: "50+",
    label: "Happy Clients",
  },
  {
    number: "24/7",
    label: "Technical Support",
  },
  {
    number: "5+",
    label: "Years of Experience",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white py-20">
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[500px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-blue-600">
            OUR IMPACT
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Technology that delivers results
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Trusted by businesses for reliable technology solutions,
            professional service and long-term support.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative text-center ${
                index !== 0 ? "md:border-l md:border-blue-100" : ""
              }`}
            >
              {/* Number */}
              <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
                {stat.number}
              </div>

              {/* Label */}
              <p className="mt-3 text-sm font-medium text-slate-600 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
