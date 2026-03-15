import { useState } from "react";
import { Sprout, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Impact", href: "#impact" },
  { label: "For Industries", href: "#industries" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <Sprout className="w-5 h-5 text-white" />
            </div>
            <span className="text-[1.25rem] tracking-tight text-gray-900" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
              Stubble<span className="text-green-600">Trade</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.875rem] text-gray-600 hover:text-green-600 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-[0.875rem]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              Get Started
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-green-100 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gray-600 hover:text-green-600 border-b border-gray-50"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block text-center px-5 py-2.5 bg-green-600 text-white rounded-lg"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
