import React from "react";
import newsData from "../data/newsData.json";
import sidebarData from "../data/sidebarData.json";
import SubjectsSection from "./subjectSection";

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
        <SubjectsSection newsData={newsData} />
      </div>
    </div>
  );
};

export default NewsAndSidebar;
