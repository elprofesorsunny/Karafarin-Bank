import React from "react";
import footerData from "../data/footerData.json";

interface FooterSection {
  title: string;
  items: string[];
}

const Footer: React.FC = () => {
  return (
    <div className="back-section5 bg-[#FCFAF3]">
      <div className="section5 max-w-[60vw] mx-auto py-8">
        <div className="grid-section5-items grid grid-cols-4 gap-4">
          {footerData.map((section: FooterSection, index: number) => (
            <div key={index} className={`section5-item${index + 1}`}>
              <div className="section5-titles text-[#007773] pb-4">
                {section.title}
              </div>
              <ul className="list-none">
                {section.items.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="square">◉</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
