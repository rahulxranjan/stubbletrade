import { Sprout, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <span className="text-[1.15rem] text-white" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
                Stubble<span className="text-green-400">Trade</span>
              </span>
            </div>
            <p className="text-gray-400 text-[0.85rem] max-w-xs" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6 }}>
              India's first B2B marketplace connecting farmers with industries through organized stubble collection and trading.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[0.9rem] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Problem", "Solution", "How It Works", "Impact", "For Industries", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                    className="text-gray-400 text-[0.85rem] hover:text-green-400 transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[0.9rem] mb-4" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
              Industries We Serve
            </h4>
            <ul className="space-y-2.5">
              {["Biomass Power Plants", "Bio-CNG Companies", "Paper & Pulp Mills", "Mushroom Farms", "Cattle Feed Manufacturers"].map((l) => (
                <li key={l}>
                  <span className="text-gray-400 text-[0.85rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[0.8rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
            &copy; 2026 StubbleTrade. All rights reserved.
          </p>
          <p className="text-gray-500 text-[0.8rem] flex items-center gap-1" style={{ fontFamily: "'Inter', sans-serif" }}>
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> for Indian farmers
          </p>
        </div>
      </div>
    </footer>
  );
}
