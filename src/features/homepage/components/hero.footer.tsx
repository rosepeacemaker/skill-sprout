import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function HeroFooter() {
  return (
    <div className=" w-full h-[25vh] relative border-2 border-red-400 bottom-0 bg-black">
      <div className="inset-0 absolute bg-gradient-to-b from-black/60 to-transparent">
        <Card className="w-[600px] h-[125px] bg-yellow-400 border border-white text-white font-semibold">
          <CardHeader>
            <CardTitle>Hurry up </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
