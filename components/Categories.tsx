"use client";
import { useState, useRef, useEffect } from "react";
import Mens from "@/components/Mens";
import Womens from "@/components/Womens";
import Childrens from "@/components/Childrens";

export default function Categories() {
  const [currentPage, setCurrentPage] = useState(0); // Tracks the current page
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    <Mens key="mens" />,
    <Womens key="womens" />,
    <Childrens key="childrens" />,
  ];

  const handlePagination = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.offsetWidth; // Width of one category
      scrollContainerRef.current.scrollTo({
        left: scrollWidth * index,
        behavior: "smooth",
      });
      setCurrentPage(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollWidth = scrollContainerRef.current.offsetWidth; // Width of one category
      const scrollLeft = scrollContainerRef.current.scrollLeft; // Current scroll position
      const newPage = Math.round(scrollLeft / scrollWidth); // Determine the current page based on scroll position
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="px-20">
      {/* Horizontal Slider */}
      <div
        ref={scrollContainerRef}
        className="flex space-x-5 overflow-x-auto scrollbar-hide snap-x scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }} // Ensures snapping to each category
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-[614px] snap-center"
          >
            {category}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 ">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => handlePagination(index)}
            className={`w-8 h-4 rounded-lg ${
              currentPage === index
                ? "bg-purple-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
