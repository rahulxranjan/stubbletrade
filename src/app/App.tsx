import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ImpactSection } from "./components/ImpactSection";
import { IndustrySection } from "./components/IndustrySection";
import { StrategySection } from "./components/StrategySection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ImpactSection />
      <IndustrySection />
      <StrategySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
