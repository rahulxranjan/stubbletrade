import { Sprout, Factory, Truck, Handshake } from "lucide-react";

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-[0.8rem] mb-5"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            THE SOLUTION
          </span>
          <h2
            className="text-gray-900 mb-5"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.2 }}
          >
            StubbleTrade Is the{" "}
            <span className="text-green-600">Missing Bridge</span>
          </h2>
          <p className="text-gray-500 text-[1.05rem]" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
            While farmers desperately burn stubble, industries desperately need it.
            Biomass power plants, bio-CNG companies, paper mills, mushroom farms — all require crop residue.
            The supply exists. The demand exists. We connect them.
          </p>
        </div>

        {/* Bridge Visualization */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-0 items-stretch">
            {/* Farmer Side */}
            <div className="bg-amber-50 rounded-2xl md:rounded-r-none p-8 border border-amber-200 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mb-5">
                <Sprout className="w-8 h-8 text-amber-600" />
              </div>
              <h3
                className="text-gray-900 mb-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.2rem" }}
              >
                Farmers
              </h3>
              <p className="text-gray-500 text-[0.875rem] mb-5" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
                Have stubble they can't afford to remove. Currently forced to burn it.
              </p>
              <ul className="text-left space-y-2 text-[0.85rem] text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">&#9679;</span>
                  No affordable machinery
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">&#9679;</span>
                  Only 15-20 day window
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">&#9679;</span>
                  No buyer or logistics
                </li>
              </ul>
            </div>

            {/* Bridge (StubbleTrade) */}
            <div className="bg-gradient-to-b from-green-500 to-emerald-600 rounded-2xl md:rounded-none p-8 flex flex-col items-center text-center relative z-10 shadow-xl shadow-green-500/20">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-5">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-white mb-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.2rem" }}
              >
                StubbleTrade
              </h3>
              <p className="text-green-100 text-[0.875rem] mb-5" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
                B2B marketplace with organized collection, baling & logistics.
              </p>
              <ul className="text-left space-y-2 text-[0.85rem] text-green-50" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-200 mt-0.5">&#10003;</span>
                  Free baling machines sent
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-200 mt-0.5">&#10003;</span>
                  Zero cost to farmer
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-200 mt-0.5">&#10003;</span>
                  Payment within 48 hours
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-200 mt-0.5">&#10003;</span>
                  End-to-end transport
                </li>
              </ul>
            </div>

            {/* Industry Side */}
            <div className="bg-blue-50 rounded-2xl md:rounded-l-none p-8 border border-blue-200 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              <h3
                className="text-gray-900 mb-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.2rem" }}
              >
                Industries
              </h3>
              <p className="text-gray-500 text-[0.875rem] mb-5" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
                Need crop residue as raw material. Struggle with fragmented supply.
              </p>
              <ul className="text-left space-y-2 text-[0.85rem] text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">&#9679;</span>
                  Biomass power plants
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">&#9679;</span>
                  Bio-CNG companies
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-0.5">&#9679;</span>
                  Paper mills & cattle feed
                </li>
              </ul>
            </div>
          </div>

          {/* Arrows on desktop */}
          <div className="hidden md:flex absolute top-1/2 left-[31%] -translate-y-1/2 z-20">
            <Truck className="w-6 h-6 text-green-600 rotate-0" />
          </div>
          <div className="hidden md:flex absolute top-1/2 right-[31%] -translate-y-1/2 z-20">
            <Truck className="w-6 h-6 text-green-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
