"use client";
import ReusableCard from "@/features/homepage/cardtypes";
import React from "react";

export default function HeroFooterCard() {
  const cardData = [
    {
      title: "Find Your Courses, Apply Hurry up!",
      content: "Join Our Learning Community!",
      bgColor: "bg-[#795d9c]",
    },
    {
      title: "Explore New Skills Today!",
      content: "Join Our Learning Community!",
      bgColor: "bg-red-500",
    },
    {
      title: "Join Our Learning Community!",
      content: "Join Our Learning Community!",
      bgColor: "bg-blue-500",
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
          />
        </div>
      ))}
    </div>
  );
}
