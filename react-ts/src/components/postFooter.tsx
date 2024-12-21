import React from "react";
import sectionData from "../data/postFooter.json";

const PostFooterSection: React.FC = () => {
  return (
    <div className="bg-[#FCFAF3] py-4">
      <div className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex justify-start items-center gap-4">
            {sectionData.items1.map((item, index) => (
              <div key={index}>
                <span
                  className="block bg-gray-400 rounded-full"
                  style={{ width: item.width, height: item.height }}
                ></span>
              </div>
            ))}
          </div>

          <div className="flex justify-end items-center space-x-8 gap-3">
            {sectionData.items2.map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-4 text-white flex items-center gap-3 w-[50%]"
              >
                <span className="bg-gray-400 rounded-full w-6 h-6"></span>
                <div>
                  <div>{`ویژه کاربران ${item.platform}`}</div>
                  <div>{item.bank}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFooterSection;
