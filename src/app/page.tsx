import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import BenefitA from "@/components/sections/BenefitA";
import BenefitB from "@/components/sections/BenefitB";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import StatsBar from "@/components/sections/StatsBar";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white relative">
      <Navbar />
      <Hero />
      <Marquee />
      <BenefitA />
      <BenefitB />
      <Features />
      <Testimonials />
      <StatsBar />
      <CTA />
      <Footer />
    </main>
  );
}
