import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import MemoryDemo from "@/components/memory-demo";
import Problem from "@/components/problem";
import MemoryVisualization from "@/components/memory-visualization";
import HowItWorks from "@/components/how-it-works";
import Privacy from "@/components/privacy";
import Integrations from "@/components/integrations";
import Waitlist from "@/components/waitlist";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MemoryDemo />
        <Problem />
        <MemoryVisualization />
        <HowItWorks />
        <Privacy />
        <Integrations />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
