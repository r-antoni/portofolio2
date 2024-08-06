"use client"
// Data
import { navItems } from "@/lib/data";
// Components
import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/main/hero";
import About from "@/components/main/about";
import Projects from "@/components/main/projects";
import Contact from "@/components/main/contact";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";

export default function Home() {
  return (
    <main className="w-full h-full">
      <FloatingNav navItems={navItems} />
      <div className="flex flex-col gap-40 px-10"> 
        <Hero />  
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
