"use client";
import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface Item {
  avatar: string;
  comment: string;
  name: string;
}

interface SlidesProps {
  items: Item[];
}

const Slides: React.FC<SlidesProps> = ({ items }: SlidesProps) => {
  const batch = items.slice(0, 3);
  return (
    <>
      <div className="md:flex md:max-w-5xl md:mx-auto gap-3 xs:ml-4 xs:mr-4">
        {batch.map((item, index) => (
          <div
            key={index}
            className={`bg-light-secondary-100 text-black p-4 rounded-[10px] w-full h-full ${
              index > 0 ? "hidden  md:block" : "block"
            }`}
          >
            <img src={item.avatar} className="rounded-full mx-auto" />
            <p className="mt-4 italic">{item.comment}</p>
            <h2 className="font-bold mt-4">{item.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slides;
