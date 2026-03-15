import { Users, Radio, Paintbrush, MessageSquare, Linkedin, Handshake } from "lucide-react";

const farmerChannels = [
  { icon: Users, label: "Village-level Aggregators", desc: "Local trusted partners in every village" },
  { icon: Handshake, label: "FPO Partnerships", desc: "Farmer Producer Organizations as channel partners" },
  { icon: MessageSquare, label: "WhatsApp Onboarding", desc: "Simple WhatsApp-based registration & updates" },
  { icon: Paintbrush, label: "Wall Paintings & Radio", desc: "Rural campaigns reaching every corner" },
];

const industryChannels = [
  { icon: Linkedin, label: "LinkedIn Outreach", desc: "Targeted B2B outreach to decision makers" },
  { icon: Handshake, label: "Direct B2B Sales", desc: "Dedicated sales team for enterprise accounts" },
  { icon: Radio, label: "Free Pilot Programs", desc: "Risk-free trial supply for new buyers" },
  { icon: Users, label: "Mandi Registration", desc: "Counters at local markets for awareness" },
];

export function StrategySection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-[0.8rem] mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            GO-TO-MARKET
          </span>
          <h2
            className="text-gray-900 mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.2 }}
          >
            Dual-Sided{" "}
            <span className="text-green-600">Sales Strategy</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Farmer Side */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6">
              <h3 className="text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.15rem" }}>
                Farmer Acquisition
              </h3>
              <p className="text-amber-100 text-[0.85rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Reaching farmers through rural-first channels
              </p>
            </div>
            <div className="p-6 space-y-4">
              {farmerChannels.map((ch) => (
                <div key={ch.label} className="flex items-start gap-4 p-3 rounded-xl hover:bg-amber-50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex-shrink-0 flex items-center justify-center">
                    <ch.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[0.9rem]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      {ch.label}
                    </p>
                    <p className="text-gray-500 text-[0.8rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {ch.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Side */}
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6">
              <h3 className="text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.15rem" }}>
                Industry Buyer Acquisition
              </h3>
              <p className="text-blue-100 text-[0.85rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
                B2B outreach to industrial buyers
              </p>
            </div>
            <div className="p-6 space-y-4">
              {industryChannels.map((ch) => (
                <div key={ch.label} className="flex items-start gap-4 p-3 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex-shrink-0 flex items-center justify-center">
                    <ch.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[0.9rem]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      {ch.label}
                    </p>
                    <p className="text-gray-500 text-[0.8rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {ch.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
