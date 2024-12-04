import React from "react";
import headerData from "../data/headerData.json";

const Header = () => {
  return (
    <header className="sticky top-0 flex flex-col">
      <nav className="top-header bg-[#c1c7ad]">
        <div className="grid grid-cols-4 w-[60vw] mx-auto items-center py-4">
          <section className="flex gap-x-5 col-start-2 col-span-2">
            {headerData.topHeaderLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:underline transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </section>
          <section className="flex justify-end col-start-4">
            {headerData.languageLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href={link.href}
                  className="hover:underline transition-colors duration-300"
                >
                  {link.text}
                </a>
                {index < headerData.languageLinks.length - 1 && " | "}
              </React.Fragment>
            ))}
          </section>
        </div>
      </nav>
      <nav className="bottom-header bg-[#fcfaf3] shadow-md">
        <div className="grid grid-cols-4 w-[60vw] mx-auto items-center py-4">
          <section className="col-span-1 flex items-center">
            <img
              src="../src/assets/imgs/image.png"
              alt="Log Bank"
              className="h-auto"
            />
          </section>
          <section className="flex gap-x-8 col-span-2 self-end">
            {headerData.bottomHeaderLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="hover:underline transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </section>
          <section className="flex justify-end items-center col-span-1">
            <div className="flex flex-col items-center space-y-4">
              <a
                href={headerData.bottomHeaderQuickAccess.link.href}
                className="hover:underline transition-colors duration-300"
              >
                {headerData.bottomHeaderQuickAccess.link.text}
              </a>
              <button className="bg-[#007773] text-white px-4 py-2 rounded-lg hover:bg-[#0ed068] transition-colors duration-300">
                {headerData.bottomHeaderQuickAccess.button.text}
              </button>
            </div>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default Header;
