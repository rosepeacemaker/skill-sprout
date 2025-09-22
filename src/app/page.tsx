import { Hero, HeroContent, HeroFooter, MenuBar } from "@/features/homepage";
import React from "react";

export default function HeroPage() {
  return (
    <>
      <Hero className="flex flex-col">
        <MenuBar />
        <HeroContent />
      </Hero>
      <HeroFooter />
    </>
  );
}
