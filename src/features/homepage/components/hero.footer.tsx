import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DropDown from "@/components/shared/dropdownbutton";
import HeroFooterCard from "@/components/shared/reuseablecard";

export default function HeroFooter({
  title = " Find Your Courses, Apply Hurry up!",
}) {
  return (
    <div className="w-full relative h-[80vh] bg-gradient-to-l from-[#1d2034] to-[#000000] flex items-center justify-center">
      <Card className="card-header">
        <CardHeader className="flex flex-col items-center p-4 justify-cent gap-2 w-full">
          <CardTitle className="text-center">{title}</CardTitle>
          <DropDown />
        </CardHeader>
      </Card>
      <CardContent className="text-2xl text-white text-center mb-16 border border-red-900">
        What we offer for Growth your study!
        <CardDescription className="card-discription">
          📚 Weather you&apos;r just stating out or leveling up your skills .
          our platform is designed to make course applications simple and
          stress-free.No fees. no confusion. Just learning.
        </CardDescription>
      </CardContent>
      <div className="flex absolute bottom-0">
        <HeroFooterCard />
      </div>
    </div>
  );
}
