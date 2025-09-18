import { Hero } from "@/features/homepage";
import React from "react";

export default function HeroPage() {
  return (
    <Hero>
      <div className="absolute inset-10 w-64 h-64 bg-blue-400">
        <div className="relative inset-10 w-32 h-32 bg-red-400">Child</div>
      </div>
    </Hero>
  );
}
