import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import DropDown from "@/components/shared/dropdownbutton";
import HeroFooterCard from "@/components/shared/reuseablecard";

export default function HeroFooter({
  title = "  Find Your Courses, Apply Hurry up!",
}) {
  return (
    <div className="w-full relative h-[80vh] bg-[#2a2a4a] flex items-center justify-center">
      <Card className="w-[450px] h-[110px] absolute top-2 flex items-center justify-center bg-[#F9A825] border border-white text-white text-[22px] font-semibold">
        <CardContent className="flex flex-col items-center p-4 justify-center gap-2 w-full">
          <CardTitle className="text-center">{title}</CardTitle>
          <DropDown />
        </CardContent>
      </Card>
      <CardDescription className="text-2xl text-white max-w-2xl border border-red-600 ">
        What we offer for Growth your study!
      </CardDescription>
      <div className="flex absolute bottom-0">
        <HeroFooterCard />
      </div>
    </div>
  );
}
