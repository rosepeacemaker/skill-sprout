import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { GraduationCap } from "lucide-react";

export default function MenuBar() {
  const menuItems = [{ label: "Home", hoverText: "hover:text-black" }];
  const baseStyles =
    "text-white font-semibold hover:underline hover:cursor-pointer transition-all duration-200";
  return (
    <Menubar className=" flex items-center gap-2 justify-between px-8 bg-transparent border-2 h-[60px] border-b-gray-600">
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
