import { Button } from "@/components/ui/button";
import { Hero, MenuBar } from "@/features/homepage";
import React from "react";

export default function HeroPage() {
  return (
    <Hero className="flex flex-col items-center justify-center">
      <div className="w-full text-center fixed top-0">
        <MenuBar />
      </div>
      <Hero.Content>Online Education Academy</Hero.Content>
      <Hero.SubContent>
        Small seeds of learning that grow into big
      </Hero.SubContent>
      <Hero.Buttons>
        <Button className="text-white hover:bg-blue-500 rounded-lg px-7 py-2 cursor-pointer border-2 border-double bg-blue-700 hover:border-yellow-100 transition duration-300">
          ENRoll
        </Button>
        <Button className="text-white bg-blue-500 hover:bg-blue-700 border-2 border-double hover:border-amber-50 rounded-lg px-4 py-2">
          Learn more
        </Button>
      </Hero.Buttons>
      <div className="flex fixed bottom-0">
        <Hero.Footer>hello</Hero.Footer>
      </div>
    </Hero>
  );
}
