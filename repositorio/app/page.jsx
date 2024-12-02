"use client"

import About from "@/components/About";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <div className="relative z-10">
        <Nav></Nav>
      </div>
      <Hero></Hero>
      <About></About>
    </div>
  );
}
