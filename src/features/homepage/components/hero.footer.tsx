import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HeroFooter() {
  return (
    <div className="w-full h-[50vh] bg-black flex items-center justify-center">
      <Card className="w-[550px] max-w-full h-[120px] flex items-center justify-center bg-yellow-400 border border-white text-white text-[22px] font-semibold">
        <CardContent className="flex flex-col items-center justify-center gap-2 w-full">
          <CardTitle className="text-center">Find Your Courses, Apply Hurry up!</CardTitle>
          <Button className="px-8 py-2">Search</Button>
        </CardContent>
      </Card>
    </div>
  );
}
  