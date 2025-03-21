// components/ThemeToggle.js
"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle({ onChangeDarkMode }: { onChangeDarkMode: () => void }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    onChangeDarkMode();
  };

  return (
    <button onClick={toggleTheme}>{theme === "light" ? "🌙" : "☀️"}</button>
  );
}
