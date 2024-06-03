"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28  text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className=" grid items-center justify-center gap-8  lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center lg:text-left">
          <Image
            alt="Profile Picture"
            className="aspect-square overflow-hidden rounded-full object-cover bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] "
            height={128}
            src="/haron-removebg-preview.png"
            width={128}
          />
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A propos de moi
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Bonjour et bienvenue sur mon portfolio. Je suis un ingénieur et
              formateur en génie civil, passionné par la construction et le
              développement durable. Avec une solide expérience dans la
              conception, la gestion de projets et l'enseignement, j'ai eu
              l'occasion de travailler sur divers projets de grande envergure et
              de collaborer avec des experts de renom notamment CRMetal, Berep,
              Setam Blida, ainsi qu'au Ministère de l'Habitat et le Cnerib . Mon
              objectif est de partager mes connaissances et mon expertise pour
              contribuer à des projets innovants et durables. Explorez mes
              réalisations et n'hésitez pas à me contacter pour toute
              collaboration ou question.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center space-y-2">
              <BackpackIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Hiking</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <BookIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Reading</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CodeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Coding</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <CameraIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Photography</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            alt="About Me"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-first"
            height={550}
            src="/about.png"
            width={550}
          />
        </div>
      </div>
    </motion.section>
  );
}

function BackpackIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5" />
      <path d="M8 10h8" />
      <path d="M8 18h8" />
    </svg>
  );
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function CameraIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

{
  /* <motion.section
  ref={ref}
  className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.175 }}
  id="about"
>
  <SectionHeading>Apropo</SectionHeading>
  <p className="mb-3">
    <span className="font-semibold">génie civil Ingénieur </span>En tant que
    individu optimiste et motivé, je possède d'excellentes compétences en
    communication. Au cours des dernières années, j'ai eu l'occasion de
    travailler et d'acquérir de l'expérience en collaborant avec des{" "}
    <span className="font-semibold">
      ingénieurs et des professeurs de renommée nationale,
    </span>{" "}
    notamment au sein de CRMetal, Berep, Setam Blida, ainsi qu'au Ministère de
    l'Habitat et au Cnerib.
  </p>
</motion.section>; */
}
