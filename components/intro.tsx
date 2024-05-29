"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsFilePdf, BsLinkedin } from "react-icons/bs";
import { FaPhone } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Link from "next/link";
import AniamtedText from "./AniamtedText";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-screen max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] flex flex-col  items-center justify-center "
    >
      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
        <AniamtedText text="Bonjour," delay={0.3}></AniamtedText>
        je suis <AniamtedText text="Haroun," delay={0.6}></AniamtedText>
        Ingénieur & Formateur en génie civil
      </motion.h1>

      <motion.div
        className="flex flex-col  items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex gap-3">
          <Link
            href="#contact"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me here{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>

          <Link
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/CV.pdf"
          >
            Mon CV{" "}
            <BsFilePdf className="opacity-60 group-hover:translate-y-1 transition" />
          </Link>
        </div>
        <div className="flex gap-3">
          <Link
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/haroun-aichouche-348a67139/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>

          <Link
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="tel:0656159070"
          >
            <FaPhone />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
