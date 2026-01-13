import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Values from "@/components/Values";
import Services from "@/components/Services";
import Platforms from "@/components/Platforms";
import ValueProposition from "@/components/ValueProposition";
import Team from "@/components/Team";
import TechPartners from "@/components/TechPartners";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Values />
        <Services />
        <Platforms />
        <ValueProposition />
        <Team />
        <TechPartners />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
