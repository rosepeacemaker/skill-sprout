import { Hero, MenuBar } from "@/features/homepage";
import React from "react";

export default function HeroPage() {
  return (
    <Hero>
    <div>
      < MenuBar/>
    </div>
    <Hero.Content>
<span>Online Education Academy</span>

    </Hero.Content>
      
    </Hero>
  );
}
