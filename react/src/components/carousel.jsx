import React, { useState } from "react";
import carouselData from "../data/carouselData.json";

const Carousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 220;

  const carouselWidth = carouselData.length * 220; // عرض کل همه آیتم‌ها (با در نظر گرفتن عرض هر آیتم)
  const containerWidth = window.innerWidth * 0.6; // عرض container (60% از عرض صفحه)

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
            {carouselData.map((item, index) => (
              <article
                key={index}
                className="carousel-item flex flex-col items-center gap-8 min-w-[10rem] flex-shrink-0"
              >
                <div className="diamond w-24 h-24 bg-[#fcfaf3] rotate-45 rounded-lg shadow-lg transition-all duration-300"></div>
                <p className="carousel-item-text text-center transition-all duration-300">
                  {item.text}
                </p>
              </article>
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
