"use client"
// Data
import { navItems } from "@/lib/data";
// Components
import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/main/hero";
import About from "@/components/main/about";
import Projects from "@/components/main/projects";
import Contact from "@/components/main/contact";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-60 px-10">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>   
    </main>
  );
}
