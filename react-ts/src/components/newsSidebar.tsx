import React from "react";
import newsData from "../data/newsData.json";
import sidebarData from "../data/sidebarData.json";
import SubjectsSection from "./subjectSection";
import ItemsSection from "./itemSection";

interface NewsItem {
  image: string;
  title: string;
  description: string;
  date: string;
  time: string;
  link: string;
}

interface SidebarItem {
  title: string;
  description: string;
  link: string;
}

interface SubjectsSectionProps {
  newsData: NewsItem[];
}

interface ItemsSectionProps {
  sidebarData: SidebarItem[];
}

const NewsAndSidebar: React.FC = () => {
  return (
    <div className="section3 max-w-[60vw] mx-auto py-6">
      <div className="section3-content grid grid-cols-4 shadow-md rounded-2xl min-h-[30rem]">
        {/* Items Section */}
        <ItemsSection sidebarData={sidebarData} />

        {/* Subjects Section */}
        <SubjectsSection newsData={newsData} />
      </div>
    </div>
  );
};

export default NewsAndSidebar;
