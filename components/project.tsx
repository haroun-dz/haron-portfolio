"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  imageUrl,
  adress,
  projects,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="mx-auto bg-gray-100 max-w-[24rem] sm:max-w-[42rem]  min-h-[25rem] border border-black/5 rounded-lg overflow-hidden hover:scale-105   relative  hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
    >
      <div className="py-28 sm:py-4 px-5 sm:pl-10  sm:pt-10 sm:max-w-[50%] flex flex-col justify-between min-h-[25rem] h-full   sm:group-even:ml-[18rem] ">
        <h3 className="text-2xl font-semibold">{title}</h3>
        {projects.map((project, index) => (
          <p key={index} className="mt-2">
            {project}
          </p>
        ))}

        <p>{adress}</p>
      </div>

      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className="absolute hidden sm:block -top-5 -right-10 w-[20rem] h-[20rem] rounded-t-lg 
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-10"
      />
    </section>
  );
}
