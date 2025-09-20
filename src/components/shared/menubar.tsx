import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { GraduationCap } from "lucide-react";

export default function MenuBar() {
  const triggerBtn =
    "text-white font-semibold hover:text-yellow transition-color";
  const menuItems = ["Home", "Courses", "Docs", "Blogs", "about"];
  return (
    <Menubar className=" flex items-center gap-2 justify-between px-8 bg-transparent border-2 h-[60px] border-b-gray-600">
      <div className="flex items-center gap-2">
        <GraduationCap size={45} fill="yellow" />
        <span className="text-white font-semibold text-2xl">Skill Sprout</span>
      </div>
      <div className=" flex items-start gap-8">
        {menuItems.map((items) => (
          <MenubarMenu key={items}>
            <MenubarTrigger className={triggerBtn}>{items}</MenubarTrigger>
          </MenubarMenu>
        ))}
      </div>
    </Menubar>
  );
}
