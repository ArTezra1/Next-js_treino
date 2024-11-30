"use client"

import Nav from "@/components/Nav";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";

export default function Home() {
  return (
    <div>
      <div className="z-10 relative">
      <Nav className="relative z-10"></Nav>
      </div>
      <div className="absolute z-0 w-full">
      <GridBackgroundDemo></GridBackgroundDemo>

      </div>
    </div>
  );
}
