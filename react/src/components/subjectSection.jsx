import React from "react";

const SubjectsSection = ({ newsData }) => {
  return (
    <div className="section3-topics grid col-span-3 mx-6 gap-6 py-6">
      <div className="grid grid-cols-3 items-center gap-4">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="news-item bg-white p-4 flex flex-col gap-4"
          >
            <img src={item.image} alt={item.title} className="rounded-lg" />
            <h3 className="text-base font-bold text-[#007773]">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <div className="text-xs text-gray-400 flex justify-between">
              <span>{item.date}</span>
              <span>{item.time}</span>
            </div>
            <a
              href={item.link}
              className="text-[#007773] text-sm hover:underline"
            >
              اخبار بیشتر
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectsSection;
