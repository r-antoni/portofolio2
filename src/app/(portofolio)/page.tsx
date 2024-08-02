"use client"
// Data
import { navItems } from "@/lib/data";
// Components
import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/main/hero";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-20">
        <Hero />
      </div>   
    </main>
  );
}
