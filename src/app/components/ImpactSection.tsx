import { Target, TrendingUp, ShieldCheck, Leaf } from "lucide-react";

const targets = [
  {
    icon: TrendingUp,
    value: "50,000",
    unit: "Tonnes",
    label: "Stubble traded in Year 1",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Target,
    value: "1.5 Cr",
    unit: "Revenue",
    label: "First year revenue target",
    color: "text-emerald-600",
    bg: "bg-emerald-100",
  },
  {
    icon: ShieldCheck,
    value: "5,000",
    unit: "Incidents",
    label: "Burning incidents prevented",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: Leaf,
    value: "100K+",
    unit: "Tonnes CO2",
    label: "Carbon emissions averted",
    color: "text-teal-600",
    bg: "bg-teal-100",
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[0.8rem] mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            YEAR 1 TARGETS
          </span>
          <h2
            className="text-gray-900 mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.2 }}
          >
            Trading Pollution for{" "}
            <span className="text-green-600">Prosperity</span>
          </h2>
          <p className="text-gray-500 text-[1.05rem]" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            We don't just trade stubble — we trade pollution for prosperity. Here's what we aim to achieve in our first year.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((t) => (
            <div
              key={t.label}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 text-center hover:shadow-lg transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl ${t.bg} flex items-center justify-center mx-auto mb-5`}>
                <t.icon className={`w-7 h-7 ${t.color}`} />
              </div>
              <p
                className={`${t.color} mb-0`}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "2.2rem", lineHeight: 1 }}
              >
                {t.value}
              </p>
              <p
                className="text-gray-400 mb-3"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "0.85rem" }}
              >
                {t.unit}
              </p>
              <p className="text-gray-600 text-[0.875rem]" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                {t.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline Banner */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center">
          <p
            className="text-green-100 text-[0.9rem] mb-3"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
          >
            Our Rural Campaign Tagline
          </p>
          <p
            className="text-white"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
          >
            "Parali mat jalao, paisa kamao"
          </p>
          <p className="text-green-200 mt-3 text-[0.95rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
            Don't burn the stubble, earn money from it
          </p>
        </div>
      </div>
    </section>
  );
}
