import { useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", type: "farmer", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-[0.8rem] mb-5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              GET STARTED
            </span>
            <h2
              className="text-gray-900 mb-5"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", lineHeight: 1.2 }}
            >
              Ready to Turn Stubble Into{" "}
              <span className="text-green-600">Revenue?</span>
            </h2>
            <p className="text-gray-500 text-[1rem] mb-10" style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
              Whether you're a farmer looking to sell stubble or an industry buyer seeking reliable biomass supply — we're here to help.
            </p>

            <div className="space-y-5">
              {[
                { icon: Phone, label: "Toll-Free Missed Call", value: "1800-XXX-XXXX" },
                { icon: MessageCircle, label: "WhatsApp", value: "+91 98XXX XXXXX" },
                { icon: Mail, label: "Email", value: "hello@stubbletrade.in" },
                { icon: MapPin, label: "Office", value: "Chandigarh, Punjab, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[0.75rem]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                      {item.label}
                    </p>
                    <p className="text-gray-900 text-[0.95rem]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <Send className="w-7 h-7 text-green-600" />
                </div>
                <h3
                  className="text-gray-900 mb-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.3rem" }}
                >
                  Thank You!
                </h3>
                <p className="text-gray-500 text-[0.95rem]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  We'll get back to you within 24 hours. Don't burn it — earn it!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3
                  className="text-gray-900 mb-1"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "1.2rem" }}
                >
                  Connect With Us
                </h3>
                <p className="text-gray-500 text-[0.85rem] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Fill in your details and we'll reach out within 24 hours.
                </p>

                {/* I am a... */}
                <div>
                  <label className="block text-gray-700 text-[0.85rem] mb-2" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    I am a...
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["farmer", "industry"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, type })}
                        className={`px-4 py-3 rounded-xl border text-[0.9rem] transition-all ${
                          formData.type === type
                            ? "bg-green-600 text-white border-green-600"
                            : "bg-white text-gray-600 border-gray-200 hover:border-green-300"
                        }`}
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                      >
                        {type === "farmer" ? "Farmer / FPO" : "Industry Buyer"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-[0.85rem] mb-1.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 text-[0.9rem]"
                    placeholder="Your name"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-[0.85rem] mb-1.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 text-[0.9rem]"
                    placeholder="+91"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-[0.85rem] mb-1.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 text-[0.9rem]"
                    placeholder="you@email.com"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 text-[0.85rem] mb-1.5" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
                    Message
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 text-[0.9rem] resize-none"
                    placeholder="Tell us about your needs..."
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all flex items-center justify-center gap-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "1rem" }}
                >
                  <Send className="w-4 h-4" />
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
