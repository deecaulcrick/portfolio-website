import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section className="px-6 my-20">
      <div>
        <h2 className="font-medium text-xl">Selected Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div className="mb-6">
              <Link href={project.link}>
                <img src={`/images/${project.image}`} className="rounded-xl" />
              </Link>
              <div className="mt-4">
                <Link href={project.link}>
                  <h2 className="text-lg font-medium">{project.title}</h2>
                </Link>
                <p className="dark:text-zinc-400">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const projects = [
  {
    title: "Urban Dictionary",
    desc: "Advanced components and templates to craft beautiful websites",
    image: "app.jpeg",
    link: "/",
  },
  {
    title: "Urban Dictionary",
    desc: "Advanced components and templates to craft beautiful websites",
    image: "app.jpeg",
    link: "/",
  },
];
