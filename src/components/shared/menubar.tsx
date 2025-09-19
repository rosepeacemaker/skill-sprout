import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { GraduationCap } from "lucide-react";
import { Button } from "../ui/button";

export default function MenuBar() {
  const triggerBtn =
    "text-white font-semibold hover:text-black transition-colors";
  const menuItems = ["Home", "Courses", "Docs", "Blogs","about"];
  return (
    <Menubar className=" flex items-center gap-2 justify-between px-8 bg-transparent border-2 h-[60px] border-b-black">
      <div className="flex items-center gap-2">
        <GraduationCap size={40} fill="black" />
        <span className="text-white font-semibold text-2xl">Skill Sprout</span>
      </div>
      <div className=" flex items-start gap-8">
        {menuItems.map((items) => (
          <MenubarMenu key={items}>
            <MenubarTrigger className={triggerBtn}>{items}</MenubarTrigger>

          </MenubarMenu>
          
          
        
        ))}
          <Button> Enroll</Button>
      </div>
      
    </Menubar>
  );
}
