import Link from "next/link";
import getPostMetaData from "@/app/utils/getPostMetaData";
import BlogCard from "./BlogCard";

import { motion } from "motion/react";

function PostList() {
  const postMetaData = getPostMetaData();

  return (
    <section className="px-6 py-10">
      <div>
        <h2 className="font-medium text-xl">Blog</h2>
        <div className="mt-10">
          {postMetaData.map((post) => (
            <BlogCard title={post.title} slug={post.slug} date={post.date} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PostList;
