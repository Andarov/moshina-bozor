import React, { useState, useEffect } from "react";

// components
import Arrow from "./Arrow";

// styles
import "../css/scroll-to-top.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleVisibility = () => {
    if (window.scrollY > 150) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", calculateScrollProgress);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", calculateScrollProgress);
    };
  }, []);

  return (
    <button
      title="Yuqoriga"
      onClick={scrollToTop}
      aria-label="scroll to top"
      className={`scroll-to-top ${isVisible ? "is-visible" : ""}`}
    >
      <svg className="progress-circle" viewBox="0 0 36 36">
        <path
          className="progress-bar"
          strokeDasharray={`${scrollProgress}, 100`}
          d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>
      <Arrow direction="top" fill="#E70A32" className="size-6 sm:size-[26px]" />
    </button>
  );
};

export default ScrollToTop;
