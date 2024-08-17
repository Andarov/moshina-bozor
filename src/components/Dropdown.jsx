import React, { useRef, useState, useEffect, cloneElement } from "react";

const Dropdown = ({
  children,
  onChange,
  className = "",
  closeTheMenuWhenAnItemIsSelected = false,
  menuItems = [{ label: "item 1" }, { label: "item 2" }, { label: "item 3" }],
}) => {
  // refs and state
  const menuContainerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // function to close the menu
  const closeMenu = () => setIsMenuOpen(false);

  // handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };

    // handle the escape key press to close the dropdown
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    // event listeners for outside clicks and escape key
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    // cleanup event listeners on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // toggle menu visibility
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  // handle item selection
  const handleSelect = (item) => {
    if (onChange) {
      onChange(item.value);
    }
  };

  return (
    <div ref={menuContainerRef} className={`${className} relative`}>
      {/* trigger */}
      {cloneElement(children, {
        onClick: toggleMenu,
      })}

      {/* menu content */}
      {isMenuOpen && (
        <div
          rel="dropdown"
          aria-label="dropdown"
          className="absolute top-[calc(100%+12px)] right-0 min-w-40 bg-white py-1.5 rounded-lg border border-111/10 shadow-lg shadow-black/5"
        >
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={handleSelect}
                className="min-w-max border-b border-111/10 last:border-b-0"
              >
                {cloneElement(item.label, {
                  onClick: closeTheMenuWhenAnItemIsSelected && closeMenu(),
                })}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
