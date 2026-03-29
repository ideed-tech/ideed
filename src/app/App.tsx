import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Story } from "./components/Story";
import { Solutions } from "./components/Solutions";
import { Process } from "./components/Process";
import { Portfolio } from "./components/Portfolio";
import { DigitalProductsGlobe } from "./components/DigitalProductsGlobe";
import { Stats } from "./components/Stats";
import { FAQ } from "./components/FAQ";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const PORTFOLIO_IMAGES = {
  project1:
    "https://images.unsplash.com/photo-1701056035581-9df3eec9fe02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwcmVtaXVtJTIwZGFyayUyMHByb2R1Y3QlMjBmaW50ZWNofGVufDF8fHx8MTc3NDgwNzkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  project2:
    "https://images.unsplash.com/photo-1634836023845-eddbfe9937da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFyayUyMGNvbXB1dGVyJTIwbW9uaXRvciUyMGRlc2t0b3AlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0ODA3OTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  project3:
    "https://images.unsplash.com/photo-1720962158883-b0f2021fb51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaCUyMGFwcCUyMGludGVyZmFjZSUyMHNsZWVrJTIwZGVzaWdufGVufDF8fHx8MTc3NDgwNzkzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  project4:
    "https://images.unsplash.com/photo-1758598307153-f1c53d9db23e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwc3RhcnR1cCUyMGRpZ2l0YWwlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0ODA3MjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
};

export default function App() {
  useEffect(() => {
    document.body.style.fontFamily = "Inter, sans-serif";
  }, []);

  return (
    <div
      className="min-h-screen bg-[#050914] text-white"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <Navbar />
      <main className="w-full overflow-hidden">
        {/* Hero */}
        <div className="bg-[#050914] w-full">
          <Hero />
        </div>
        {/* Story + Vision/Mission */}
        <Story />
        {/* Solutions */}
        <Solutions />
        {/* Process */}
        <Process />
        {/* Portfolio */}
        <Portfolio images={PORTFOLIO_IMAGES} />
        {/* Digital Products Globe */}
        <DigitalProductsGlobe />
        {/* Stats */}
        <Stats />
        {/* FAQ */}
        <FAQ />
        {/* CTA */}
        <CTA />
        {/* Contact */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
