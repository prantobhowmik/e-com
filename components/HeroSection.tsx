"use client"
import { useState } from "react";
import { GoArrowUpRight, GoArrowDownRight } from "react-icons/go";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center h-[500px]"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Elevate Your Everyday Style
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-6">
          Discover the Latest Trends in Sustainable Fashion
        </p>

        {/* Button */}
        <button
          className="flex flex-row items-center  "
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className=" bg-purple-500 hover:bg-purple-700 transition-colors duration-300 text-white py-3 px-7 rounded-full">Shop Now</span>
          {isHovered ? (
            <GoArrowDownRight className=" bg-purple-500 hover:bg-purple-700 transition-colors duration-300 text-white w-[48px] h-[48px] rounded-full" size={14} />
          ) : (
            <GoArrowUpRight className=" bg-purple-500 hover:bg-purple-700 transition-colors duration-300 text-white w-[48px] h-[48px] rounded-full" size={14} />
          )}
        </button>
      </div>
    </section>
  );
}
