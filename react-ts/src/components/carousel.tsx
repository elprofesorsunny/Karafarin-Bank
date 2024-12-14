import React, { useState } from "react";
import carouselData from "../data/carouselData.json";
import CarouselItem from "./carouselItem";

interface CarouselItemData {
  text: string;
}

const Carousel: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0); // نوع عددی برای scrollPosition
  const scrollAmount = 220;

  const carouselWidth = carouselData.length * scrollAmount;
  const containerWidth = window.innerWidth * 0.6;

  const handleLeftArrowClick = () => {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - scrollAmount);
    }
  };

  const handleRightArrowClick = () => {
    if (scrollPosition < carouselWidth - containerWidth) {
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };

  return (
    <section className="bg-[#c1c7ad] bg-fixed bg-cover bg-center">
      <div className="section2 max-w-[60vw] mx-auto py-8">
        <div className="carousel-container flex items-center relative overflow-hidden scrollbar-hidden">
          <button
            className="arrow left absolute top-1/2 left-0 transform -translate-y-1/2 bg-transparent p-2 text-xl cursor-pointer z-10"
            onClick={handleLeftArrowClick}
          >
            <span className="square w-2.5 h-2.5 border-2 border-red-500 block mx-auto"></span>
          </button>
          <div
            className="carousel flex gap-16 px-8 py-8 transition-transform ease-in-out duration-300"
            style={{ transform: `translateX(${scrollPosition}px)` }}
          >
            {/* Used typed data */}
            {carouselData.map((item: CarouselItemData, index: number) => (
              <CarouselItem key={index} text={item.text} />
            ))}
          </div>
          <button
            className="arrow right absolute top-1/2 right-0 transform -translate-y-1/2 bg-transparent p-2 text-xl cursor-pointer z-10"
            onClick={handleRightArrowClick}
          >
            <span className="square w-2.5 h-2.5 border-2 border-red-500 block mx-auto"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
