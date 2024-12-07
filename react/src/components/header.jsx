import React, { useState, useEffect } from "react";
import headerData from "../data/headerData.json";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeDropdown2, setActiveDropdown2] = useState(null);
  
  // استفاده از useEffect برای بستن دراپ‌داون وقتی که کلیک در خارج از آن صورت بگیرد
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
        setActiveDropdown2(null);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleDropdown2Toggle = (index) => {
    setActiveDropdown2(activeDropdown2 === index ? null : index);
  };

  return (
    <header className="sticky top-0 z-50 flex flex-col">
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
              <div key={index} className="relative dropdown-container">
                {/* First Dropdown */}
                {link.dropdown ? (
                  <div
                    className="group cursor-pointer"
                    onClick={() => handleDropdownToggle(index)}
                  >
                    <a
                      href={link.href}
                      className="hover:underline transition-colors duration-300"
                    >
                      {link.text}
                    </a>
                    {activeDropdown === index && (
                      <div className="absolute bg-white shadow-md mt-2 w-[600px] border rounded-lg grid grid-cols-2 gap-3 p-4">
                        <div className="flex flex-col">
                          {/* First Column (dropdown) */}
                          {link.dropdown.map((dropdownLink, i) => (
                            <div key={i}>
                              <a
                                href={dropdownLink.href}
                                className="text-black hover:bg-gray-100 px-4 py-2 block"
                              >
                                {dropdownLink.text}
                              </a>
                              {/* Sub-items of First Dropdown */}
                              {dropdownLink.dropdropdown && (
                                <div className="ml-6">
                                  {dropdownLink.dropdropdown.map((subItem, j) => (
                                    <a
                                      key={j}
                                      href={subItem.href}
                                      className="text-black hover:bg-gray-100 px-4 py-2 block"
                                    >
                                      {subItem.text}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col">
                          {/* Second Column (dropdown2) */}
                          {link.dropdown2?.map((dropdownLink, i) => (
                            <div key={i}>
                              <a
                                href={dropdownLink.href}
                                className="text-black hover:bg-gray-100 px-4 py-2 block"
                              >
                                {dropdownLink.text}
                              </a>
                              {/* Sub-items of Second Dropdown */}
                              {dropdownLink.dropdropdown2 && (
                                <div className="ml-6">
                                  {dropdownLink.dropdropdown2.map((subItem, j) => (
                                    <a
                                      key={j}
                                      href={subItem.href}
                                      className="text-black hover:bg-gray-100 px-4 py-2 block"
                                    >
                                      {subItem.text}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className="hover:underline transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                )}
              </div>
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
              <button className="bg-[#007773] text-white px-6 py-3 rounded-lg hover:bg-[#0ed068] transition-colors duration-300">
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
