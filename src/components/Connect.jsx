import Link from "next/link";

const Connect = () => {
  return (
    <section className="px-6 my-10">
      <div>
        <h2 className="font-medium text-xl">Connect</h2>
        <p className="dark:text-zinc-300 mt-4">
          Feel free to contact me at{" "}
          <a href="" className="dark:text-white underline">
            your@email.com
          </a>
        </p>
        <div className="flex gap-4 mt-6">
          {links.map((link) => (
            <div className="rounded-xl bg-zinc-300/40 dark:bg-zinc-700/60 py-1 px-4 w-fit text-sm">
              <Link href={link.link}>{link.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Connect;

const links = [
  {
    title: "Github",
    link: "https://github.com/deecaulcrick",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/deecaulcrick",
  },
  {
    title: "LinkedIn",
    link: "https://linkedin.com/in/deborah-caulcrick",
  },
  {
    title: "Instagram",
    link: "https://instagram.com/deecaulcrick",
  },
];
