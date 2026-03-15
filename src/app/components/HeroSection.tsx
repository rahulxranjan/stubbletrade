import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1699386872634-cad1a70f05d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwcGFkZHklMjBmaWVsZCUyMGhhcnZlc3QlMjBJbmRpYXxlbnwxfHx8fDE3NzM1MTI2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Rice paddy field"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-300 text-[0.8rem]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              India's First Stubble Trading Marketplace
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1.1 }}
          >
            Don't <span className="text-red-400">Burn</span> It.{" "}
            <span className="text-green-400">Earn</span> It.
          </h1>

          <p
            className="text-[1.25rem] text-gray-300 mb-8 max-w-2xl"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, lineHeight: 1.7 }}
          >
            Connecting farmers with industries through organized collection, baling, and logistics.
            Turn crop residue into revenue — zero cost for farmers, guaranteed payment within 48 hours.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all hover:shadow-lg hover:shadow-green-500/25"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1.05rem" }}
            >
              Start Trading Stubble
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "1.05rem" }}
            >
              See How It Works
            </a>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-[0.75rem]" style={{ fontFamily: "'Inter', sans-serif" }}>Missed Call</p>
                <p className="text-white text-[0.95rem]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>1800-XXX-XXXX</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-gray-400 text-[0.75rem]" style={{ fontFamily: "'Inter', sans-serif" }}>WhatsApp</p>
                <p className="text-white text-[0.95rem]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>+91 98XXX XXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="hidden lg:block absolute right-12 bottom-20">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 space-y-5">
          {[
            { value: "500M+", label: "Tonnes Crop Residue/Year", color: "text-amber-400" },
            { value: "92M", label: "Tonnes Burned Annually", color: "text-red-400" },
            { value: "66,000", label: "Premature Deaths/Year", color: "text-red-300" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className={`${stat.color}`} style={{ fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: "1.5rem" }}>
                {stat.value}
              </p>
              <p className="text-gray-400 text-[0.8rem]" style={{ fontFamily: "'Inter', sans-serif" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
