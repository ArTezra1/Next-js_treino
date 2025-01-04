"use client"

import { navItems } from "@/data/items";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Client from "@/components/Client";
import Work from "@/components/Work";
import Approach, { ThreeDCardDemo } from "@/components/Approach";
import Contact from "@/components/Contact";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <FloatingNav
      navItems={navItems}
      ></FloatingNav>
      <Hero></Hero>
      <div className="px-10">
        <About></About>
        <Projects></Projects>
        <Client></Client>
        <Work></Work>
        <ThreeDCardDemo></ThreeDCardDemo>
        <Contact></Contact>
      </div>
    </div>
  );
}
