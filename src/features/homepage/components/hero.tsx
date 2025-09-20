import React from "react";

type HeroTypes = {
  children: React.ReactNode;
  className?: React.ComponentProps<"div">["className"];
};
export default function Hero({ children, className }: HeroTypes) {
  return (
    <div className=" w-full h-[80vh] relative bg-[url('/assets/school-img.jpg')] bg-cover bg-center">
      <div
        className={`${className} inset-0 absolute
     bg-gradient-to-b from-black/60 to-transparent backdrop-blur-xs`}
      >
        {children}
      </div>
    </div>
  );
}

Hero.Content = function HeroContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="text-white text-[45px] font-bold leading-tigth w-95 text-center
    "
    >
      {children}
    </div>
  );
};

Hero.SubContent = function HeroSubContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-white text-[16px] text-center leading-relaxed mt-4">
      {children}
    </div>
  );
};
Hero.Buttons = function HeroButtons({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex space-x-4 mt-6">{children}</div>;
};
Hero.Footer = function HeroFooter({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex bg-black">{children}</div>;
};

