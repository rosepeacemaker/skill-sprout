"use client";
import ReusableCard from "@/features/homepage/cardtypes";

import React from "react";

export default function HeroFooterCard() {
  const cardData = [
    {
      title: "Find Your Courses, Apply Hurry up!",
      titleClass: "text-2xl",
      content: "Join Our Learning Community!",
      contentClass: "text-sm",
      bgColor: "bg-[#795d9c]",
    },
    {
      title: "Explore New Skills Today!",
      titleClass: "text-2xl",
      content: "Join Our Learning Community!",
      contentClass: "text-sm",
      bgColor: "bg-red-500",
    },
    {
      title: "Join Our Learning Community!",
      content: "Join Our Learning Community!",
      contentClass: "text-sm",
      titleClass: "text-2xl",
      bgColor: "bg-gradient-to-t from-[#0b58d4] to-[#031636]",
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center gap-6 py-6">
      {cardData.map((card, index) => (
        <div key={index} className="shadow-2xl rounded-lg">
          <ReusableCard
            title={card.title}
            content={card.content}
            bgColor={card.bgColor}
            titleClass={card.titleClass}
            contentClass={card.contentClass}
          />
        </div>
      ))}
    </div>
  );
}
