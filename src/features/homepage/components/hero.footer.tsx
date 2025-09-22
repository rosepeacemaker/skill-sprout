import React from "react";
import { Card } from "@/components/ui/card";

type HeroFooterTypes = {
  children: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
};
export default function HeroFooter({ children, className }: HeroFooterTypes) {
  return (
    <div className=" w-full h-[25vh] relative border-2 border-red-400 bottom-0 bg-black">
      <div
        className={`${className} inset-0 absolute
     bg-gradient-to-b from-black/60 to-transparent`}
      >
        {children}
      </div>
    </div>
  );
}
HeroFooter.Card = function HeroCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Card className="w-[600px] h-[125px] bg-yellow-400 border border-white text-white font-semibold">
      {children}
    </Card>
  );
};
