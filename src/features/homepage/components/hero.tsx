import React from "react";

type HeroTypes = {
  children: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
};
export default function Hero({ children, className }: HeroTypes) {
  return (
    <div className=" w-full h-[80vh] relative bg-[url('/assets/hatts-img.jpg')] bg-cover bg-center">
      <div
        className={`${className} inset-0 absolute
     bg-gradient-to-b from-black/60 to-transparent`}
      >
        {children}
      </div>
    </div>
  );
}

Hero.Content = function HeroContent({ children }: { children: React.ReactNode }) {
  return <div className="text-white text-[35px] font-bold flex items-center justify-center w-90 border border-red-700">{children}</div>;
};


