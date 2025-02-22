"use client";
import Link from "next/link";
import { motion } from "motion/react";

const BlogCard = ({ title, date, slug }) => {
  return (
    <motion.div
      layout
      whileHover={{
        scale: 1,
        transition: { duration: 1 },
      }}
      className=" hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40 p-4 rounded-xl cursor-pointer "
    >
      <h2 className="text-base">
        <Link href={`/posts/${slug}`} className="post-card-title">
          {title}
        </Link>
      </h2>
      <p className="text-zinc-400">{date}</p>
    </motion.div>
  );
};

export default BlogCard;
