import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { Projects } from "@/components/Projects";
import { Resume } from "@/components/Resume";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <ParticleNetwork />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TechStack />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
