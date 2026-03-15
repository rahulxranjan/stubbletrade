import { Flame, Wind, HeartPulse, IndianRupee } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  {
    icon: Flame,
    value: "92M Tonnes",
    label: "Stubble burned annually by helpless farmers",
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    icon: Wind,
    value: "AQI 999+",
    label: "Delhi becomes a gas chamber every November",
    color: "text-gray-600",
    bg: "bg-gray-50",
    border: "border-gray-200",
  },
  {
    icon: HeartPulse,
    value: "66,000",
    label: "Premature deaths caused every single year",
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-100",
  },
  {
    icon: IndianRupee,
    value: "30,000 Cr",
    label: "Annual health damage to the economy",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 text-[0.8rem] mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            THE CRISIS
          </span>
          <h2
            className="text-gray-900 mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.2 }}
          >
            The Farmer Is Not the Villain.{" "}
            <span className="text-red-500">The System Is.</span>
          </h2>
          <p className="text-gray-500 text-[1.05rem]" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            Every year, farmers have only 15–20 days between rice harvest and wheat sowing.
            With no affordable machinery, no buyer, and no logistics support — they have no choice but to burn.
          </p>
        </div>

        {/* Image + Stats Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1602727751184-d7b7d0cd9d8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXIlMjBwb2xsdXRpb24lMjBzbW9nJTIwY2l0eSUyMEluZGlhfGVufDF8fHx8MTc3MzUxMjYwMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Air pollution smog in Delhi"
              className="w-full h-80 lg:h-[28rem] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p
                className="text-white/90 text-[0.95rem]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, lineHeight: 1.6 }}
              >
                "Schools shut. Hospitals overflow. And somewhere in Punjab, a helpless farmer strikes a match — not because he wants to, but because he has no other option."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`${stat.bg} ${stat.border} border rounded-xl p-6 hover:shadow-md transition-shadow`}
              >
                <div className={`w-11 h-11 rounded-lg ${stat.bg} flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <p
                  className={`${stat.color} mb-1`}
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "1.5rem" }}
                >
                  {stat.value}
                </p>
                <p className="text-gray-500 text-[0.85rem]" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
