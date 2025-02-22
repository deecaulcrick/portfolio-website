"use client";

import { easeInOut, motion } from "motion/react";

const WorkExperience = () => {
  return (
    <section className="px-6 my-10">
      <div>
        <h2 className="font-medium text-xl">Work Experience</h2>

        <div className="flex flex-col gap-3 mt-6">
          {experiences.map((experience) => (
            <Card
              key={experience.id}
              position={experience.position}
              title={experience.title}
              date={experience.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

const experiences = [
  {
    id: 1,
    position: "CEO",
    title: "DC Design Studio",
    date: "2024 - Present",
  },
  {
    id: 2,
    position: "Design Engineer",
    title: "Freelance",
    date: "2022 - 2024",
  },
  {
    id: 3,
    position: "Front-end Developer",
    title: "Freelance",
    date: "2017 - Present",
  },
];

const Card = ({ title, position, date }) => {
  return (
    <motion.div
      layout
      whileHover={{
        scale: 0.97,
      }}
      transition={{
        ease: easeInOut,
      }}
      className="dark:bg-slate-950 p-4 flex justify-between items-center rounded-2xl border border-zinc-300 dark:border-zinc-700"
    >
      <div>
        <h2 className="font-medium">{position}</h2>
        <p className="text-zinc-400">{title}</p>
      </div>
      <div>
        <p className="text-zinc-400">{date}</p>
      </div>
    </motion.div>
  );
};
