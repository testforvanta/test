import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* The original body had 'hacker-grid min-h-screen'.
          This will be moved to layout.tsx or globals.css for body styling.
          For now, applying min-h-screen to main.
      */}
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Stats />
      <Solutions />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
