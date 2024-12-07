import React from "react";
import newsData from "../data/newsData.json";
import sidebarData from "../data/sidebarData.json";

const NewsAndSidebar = () => {
  return (
    <div className="section3 max-w-[60vw] mx-auto py-6">
      <div className="section3-content grid grid-cols-4 shadow-md rounded-2xl min-h-[30rem]">
        {/* Items Section */}
        <div className="section3-items flex items-center">
          <div className="grid grid-rows-5 rounded-2xl mx-6 gap-4 w-full">
            {sidebarData.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="sidebar-item flex items-center gap-4 p-2 bg-[#FCFAF3] rounded-lg shadow-lg transition-all hover:bg-[#c1c7ad]"
              >
                <span className="text-xl text-gray-600">{item.icon}</span>
                <span className="text-sm text-gray-800">{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Subjects Section */}
        <div className="section3-topics grid col-span-3 mx-6 gap-8 py-6">
          <div className="grid grid-cols-3 items-center gap-8">
            {newsData.map((item, index) => (
              <div
                key={index}
                className="news-item bg-white p-4 flex flex-col gap-4"
              >
                <img src={item.image} alt={item.title} className="rounded-lg" />
                <h3 className="text-base font-bold text-[#007773]">
                  {item.title}
                </h3>
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
      </div>
    </div>
  );
};

export default NewsAndSidebar;
