import React from "react";

interface SidebarItem {
  icon: string;  // فرض بر این است که آیکون‌ها به صورت رشته‌ای (string) هستند
  text: string;
  link: string;
}

interface ItemsSectionProps {
  sidebarData: SidebarItem[];
}

const ItemsSection: React.FC<ItemsSectionProps> = ({ sidebarData }) => {
  return (
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
  );
};

export default ItemsSection;
