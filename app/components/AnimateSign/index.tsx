import React, { useEffect, useRef } from "react";
import Vara from "vara";

export default function AnimateSign({ text }: { text: string }) {
  const lightModeContainer = useRef<HTMLDivElement>(null);
  const darkModeContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fontSize = window.innerWidth >= 1024 ? 32 : 24;

    // Initialize Vara for light mode
    new Vara(
      "#vara-container-light",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
      [
        {
          text: text,
          fontSize: fontSize,
          strokeWidth: 1.1,
          color: "black", // Light mode color
          duration: 3000,
        },
      ]
    );

    // Initialize Vara for dark mode
    new Vara(
      "#vara-container-dark",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
      [
        {
          text: text,
          fontSize: fontSize,
          strokeWidth: 1.1,
          color: "white", // Dark mode color
          duration: 3000,
        },
      ]
    );
  }, [text]);

  // Toggle opacity based on theme
  const updateOpacity = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");

    if (lightModeContainer.current && darkModeContainer.current) {
      lightModeContainer.current.style.opacity = isDarkMode ? "0" : "1";
      darkModeContainer.current.style.opacity = isDarkMode ? "1" : "0";
    }
  };

  useEffect(() => {
    // Initial opacity update
    updateOpacity();

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          updateOpacity(); // Update opacity when theme changes
        }
      });
    });

    // Observe the <html> element for class changes
    observer.observe(document.documentElement, {
      attributes: true,
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full whitespace-nowrap my-0 h-16 md:h-24 relative">
      {/* Light mode container */}
      <div
        id="vara-container-light"
        ref={lightModeContainer}
        className="absolute inset-0 opacity-100 transition-opacity duration-300"
      />

      {/* Dark mode container */}
      <div
        id="vara-container-dark"
        ref={darkModeContainer}
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
      />
    </div>
  );
}
