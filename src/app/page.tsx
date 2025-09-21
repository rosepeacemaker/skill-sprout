import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import { Hero, HeroFooter, MenuBar } from "@/features/homepage";
import React from "react";

export default function HeroPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <Hero className="flex flex-col">
        <header className="w-full text-center items-start">
          <MenuBar />
        </header>
        <main className="flex items-center justify-center flex-col mt-10">
          <Hero.Content>
            <h1>Online Education Academy</h1>
            <p className="text-[16px]">
              Small seeds of learning that grow into big
            </p>
          </Hero.Content>
          <Hero.Buttons>
            <Button className="custom-button">ENRoll</Button>
            <Button className="custom-button">Learn more</Button>
          </Hero.Buttons>
        </main>
      </Hero>
      <HeroFooter className="flex justify-center">
        <HeroFooter.Card>
          <CardHeader><h1 className="text-[24px] text-center">Find Your Courses.. Apply Hurry up!</h1></CardHeader>
        </HeroFooter.Card>
      </HeroFooter>
    </section>
  );
}
