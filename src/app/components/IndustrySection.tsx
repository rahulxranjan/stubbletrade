import { Zap, Fuel, FileText, Beef, FlaskConical, Wheat } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const industries = [
  { icon: Zap, name: "Biomass Power Plants", desc: "Crop residue as fuel for renewable energy generation" },
  { icon: Fuel, name: "Bio-CNG Companies", desc: "Stubble converted to compressed natural gas" },
  { icon: FileText, name: "Paper & Pulp Mills", desc: "Raw material for paper and packaging production" },
  { icon: FlaskConical, name: "Mushroom Farms", desc: "Straw substrate for commercial mushroom cultivation" },
  { icon: Beef, name: "Cattle Feed Makers", desc: "Processed residue as nutritious animal feed" },
  { icon: Wheat, name: "Compost & Biochar", desc: "Organic compost and biochar for soil enrichment" },
];

export function IndustrySection() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-[0.8rem] mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              FOR INDUSTRY BUYERS
            </span>
            <h2
              className="text-white mb-5"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2 }}
            >
              Reliable Biomass Supply,{" "}
              <span className="text-green-400">Guaranteed</span>
            </h2>
            <p className="text-gray-400 text-[1rem] mb-8" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
              Get consistent, high-quality crop residue delivered to your facility.
              We handle aggregation, baling, quality control, and transportation — so you can focus on production.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex-shrink-0 flex items-center justify-center">
                    <ind.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white text-[0.9rem]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      {ind.name}
                    </p>
                    <p className="text-gray-500 text-[0.8rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {ind.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1764842344473-02930cc67bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGJpb21hc3MlMjBlbmVyZ3l8ZW58MXx8fHwxNzczNTEyNjAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Industrial biomass facility"
              className="w-full h-96 lg:h-[30rem] object-cover rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gray-900/50 to-transparent" />

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-[0.85rem]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    Pilot Program
                  </p>
                  <p className="text-gray-300 text-[0.8rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Try our supply chain risk-free
                  </p>
                </div>
                <a
                  href="#contact"
                  className="px-5 py-2.5 bg-green-500 text-white rounded-lg text-[0.85rem] hover:bg-green-600 transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                >
                  Request Pilot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
