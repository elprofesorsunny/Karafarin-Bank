import React, { useState, useEffect } from "react";
import headerData from "../data/headerData.json";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleDropdownToggle = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const renderDropdown = (items) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="absolute bg-white shadow-md mt-2 w-[600px] border rounded-lg grid grid-cols-2 gap-3 p-4">
        {items.map((dropdownItem) => (
          <div key={dropdownItem.id} className="flex flex-col">
            <a
              href={dropdownItem.href}
              className="text-black hover:bg-gray-100 px-4 py-2 block"
            >
              {dropdownItem.text}
            </a>
          </div>
        ))}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 flex flex-col">
      {/* Top Header */}
      <nav className="top-header bg-[#c1c7ad]">
        <div className="grid grid-cols-4 w-[60vw] mx-auto items-center py-4">
          <section className="flex gap-x-5 col-start-2 col-span-2">
            {headerData.topHeaderLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="hover:underline transition-colors duration-300"
              >
                {link.text}
              </a>
            ))}
          </section>
          <section className="flex justify-end col-start-4">
            {headerData.languageLinks.map((lang) => (
              <a
                key={lang.id}
                href={lang.href}
                className="hover:underline transition-colors duration-300"
              >
                {lang.text}
              </a>
            ))}
          </section>
        </div>
      </nav>

      {/* Bottom Header */}
      <nav className="bottom-header bg-[#fcfaf3] shadow-md">
        <div className="grid grid-cols-4 w-[60vw] mx-auto items-center py-4">
          {/* Logo */}
          <section className="col-span-1 flex items-center">
            <img
              src="../src/assets/imgs/image.png"
              alt="Log Bank"
              className="h-auto"
            />
          </section>

          {/* Navigation Links */}
          <section className="flex gap-x-8 col-span-2 self-end">
            {headerData.bottomHeaderLinks.map((link) => (
              <div key={link.id} className="relative dropdown-container">
                <div
                  className="group cursor-pointer"
                  onClick={() => handleDropdownToggle(link.id)}
                >
                  <a
                    href={link.href}
                    className="hover:underline transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                  {activeDropdown === link.id &&
                    renderDropdown(link.dropdown || link.dropdown2)}
                </div>
              </div>
            ))}
          </section>

          {/* Quick Access */}
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
