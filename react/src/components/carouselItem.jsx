import React from "react";

const CarouselItem = ({ text }) => {
  return (
    <article className="carousel-item flex flex-col items-center gap-8 min-w-[10rem] flex-shrink-0">
      <div className="diamond w-24 h-24 bg-[#fcfaf3] rotate-45 rounded-lg shadow-lg transition-all duration-300"></div>
      <p className="carousel-item-text text-center transition-all duration-300">
        {text}
      </p>
    </article>
  );
};

export default CarouselItem;
