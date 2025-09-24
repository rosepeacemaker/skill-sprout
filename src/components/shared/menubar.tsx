import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { GraduationCap } from "lucide-react";

export default function MenuBar() {
  const menuItems = [
    { label: "Home", hoverText: "hover:text-red" },
    { label: "About", hoverText: "hover:text-black" },
    { label: "courses", hoverText: "hover:text-red" },
    { label: "Docs", hoverText: "hover:text-red" },
  ];
  const baseStyles =
    "text-white text-[18px] font-semibold hover:underline hover:cursor-pointer transition-all duration-200";
  return (
    <Menubar className=" flex items-center gap-2 justify-around px-8 bg-transparent border-2 h-[60px] border-b-white">
      <div className="flex items-center gap-2">
        <GraduationCap size={45} fill="yellow" />
        <span className="text-white font-semibold text-2xl">Skill Sprout</span>
      </div>
      <div className=" flex items-start gap-8">
        {menuItems.map((items) => (
          <MenubarMenu key={items.label}>
            <MenubarTrigger className={` ${items.hoverText} ${baseStyles}`}>
              {items.label}
            </MenubarTrigger>
          </MenubarMenu>
        ))}
      </div>
    </Menubar>
  );
}
