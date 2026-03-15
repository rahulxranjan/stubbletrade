import { Phone, Tractor, Truck, Banknote } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Farmer Connects",
    description: "A farmer gives a missed call or sends a WhatsApp message. That's it — no app download, no registration forms.",
    color: "from-amber-400 to-orange-500",
    bg: "bg-amber-50",
  },
  {
    step: "02",
    icon: Tractor,
    title: "We Collect & Bale",
    description: "We send baling machines directly to the field. Stubble is collected and baled at zero cost to the farmer.",
    color: "from-green-400 to-emerald-500",
    bg: "bg-green-50",
  },
  {
    step: "03",
    icon: Truck,
    title: "We Transport",
    description: "Baled stubble is transported to the nearest industrial buyer through our logistics network.",
    color: "from-blue-400 to-indigo-500",
    bg: "bg-blue-50",
  },
  {
    step: "04",
    icon: Banknote,
    title: "Farmer Gets Paid",
    description: "Guaranteed payment within 48 hours. Direct bank transfer. No middlemen, no delays.",
    color: "from-emerald-400 to-green-600",
    bg: "bg-emerald-50",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-[0.8rem] mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            HOW IT WORKS
          </span>
          <h2
            className="text-gray-900 mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.2 }}
          >
            From Field to Factory in{" "}
            <span className="text-green-600">4 Simple Steps</span>
          </h2>
          <p className="text-gray-500 text-[1.05rem]" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            No app. No paperwork. Just a missed call — and we handle the rest.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={s.step} className="relative group">
              <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition-all h-full">
                {/* Step Number */}
                <span
                  className="text-gray-200 mb-4 block"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "3rem", lineHeight: 1 }}
                >
                  {s.step}
                </span>
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4`}>
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-gray-900 mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
                >
                  {s.title}
                </h3>
                <p className="text-gray-500 text-[0.85rem]" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
                  {s.description}
                </p>
              </div>
              {/* Connector */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-3 w-6 h-0.5 bg-green-300 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
