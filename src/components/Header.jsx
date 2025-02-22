"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

function Header() {
  return (
    <div className="px-6 py-14 text-base">
      <h3 className="font-medium">Dee Caulcrick</h3>
      <TypingEffect text="Design Engineer" />
    </div>
  );
}

export default Header;

const TypingEffect = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <h3 ref={ref} className="dark:text-zinc-400">
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {letter}
        </motion.span>
      ))}
    </h3>
  );
};
