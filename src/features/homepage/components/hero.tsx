import React from "react";
type HeroTypes = {
  children: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
};
export default function Hero({ children, className }: HeroTypes) {
  
  return (
    <div
      className={`${className} relative w-full h-[60vh] flex flex-col justify-center items-center overflow-hidden`}
    >
      {children}
    </div>
  );
}
Hero.Image = function HeroImage({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
};
