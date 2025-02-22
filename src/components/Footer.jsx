"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Footer = () => {
  return (
    <section className="border-t border-t-zinc-300 dark:border-t-zinc-700 px-6 py-4 text-sm">
      <div className="flex justify-between items-center text-zinc-400">
        <RotateWords words={["© 2025", "Built by Dee Caulcrick"]} />

        <DarkModeToggle />
      </div>
    </section>
  );
};

export default Footer;

const RotateWords = ({ words }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000);
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-sm">
      <AnimatePresence mode="wait">
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {words[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const darkMode = localStorage.getItem("theme") === "dark";
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    setIsDark(!isDark);

    localStorage.setItem("theme", html.classList.contains("dark"));
  };
  return (
    <div onClick={toggleDarkMode} className="cursor-pointer">
      {isDark ? "Light Mode" : "Dark Mode"}
    </div>
  );
};
