import React from "react";

export function GridBackgroundDemo() {
  return (
    (<div
      className="h-[50rem] w-full dark:bg-black bg-slate-950  dark:bg-grid-/[0.2] bg-grid-black/[0.5]
      absolute flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-slate-600[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>)
  );
}
