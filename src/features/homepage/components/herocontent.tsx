import { Button } from "@/components/ui/button";
import React from "react";

export default function HeroContent() {
  return (
    <div className="text-white text-[45px] font-bold flex-1 leading-loose flex items-center justify-center flex-col border border-green-500">
      <h1>Online Education Academy</h1>
      <p className="text-[16px]">Small seeds of learning that grow into big</p>
      <div className="flex gap-2 mt-2">
        <Button className="custom-button">ENROLL</Button>
        <Button className="custom-button">Learn more</Button>
      </div>
    </div>
  );
}
