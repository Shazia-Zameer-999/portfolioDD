"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WhyChoose from "@/components/WhyChoose";
import Approach from "@/components/Approach";
import Showcase from "@/components/Showcase";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Approach />
        <WhyChoose />
        <Showcase />
        <Skills />

      </main>
    </>
  );
}
