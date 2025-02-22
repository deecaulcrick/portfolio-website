import fs from "fs";
import BlogPost from "@/components/BlogPost";

import matter from "gray-matter";
import getPostMetaData from "../../../utils/getPostMetaData";

const getPostContent = (slug) => {
  const folder = "all-posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => ({ slug: post.slug }));
};

const singlePost = (props) => {
  const slug = props.params.slug;
  const postContent = getPostContent(slug);

  return (
    <div className="post p-6">
      <div className="post-info mb-6">
        {/* <div className="category-box">
                    {postContent.data.tags.map((tag) => (
                        <div key={postContent.data.title} className="category">{tag}</div>
                    ))}
                </div> */}

        <h1 className="post-title font-medium text-2xl md:text-4xl">
          {postContent.data.title}
        </h1>

        <p className="post-date text-zinc-400">{postContent.data.date}</p>
        {/* <img src={`/images/${postContent.data.coverImage}`}
                    alt={postContent.data.title}
                    className='post-image' />

                <figcaption>{postContent.data.caption}</figcaption> */}
      </div>

      <BlogPost content={postContent.content} />

      <div className="post-footer">
        <p>REPLY</p>
        <ul>
          <li>
            <a href="mailto:deecaulcrick@gmail.com" target="_blank">
              Email
            </a>
          </li>
          <li>
            <a href="https://twitter.com/deecaulcrick" target="_blank">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default singlePost;
