import React from "react";

type HeroTypes = {
  children: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
};
export default function Hero({ children, className }: HeroTypes) {
  return (
    <div className=" w-full h-[75vh] relative bg-[url('/assets/school-img.jpg')] bg-cover bg-center">
      <div
        className={`${className} inset-0 absolute
     bg-gradient-to-b from-black/60 to-transparent backdrop-blur-xs`}
      >
        {children}
      </div>
    </div>
  );
}


