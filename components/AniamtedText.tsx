"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
  delay: number;
};

function AniamtedText({ text, delay }: Props) {
  return (
    <>
      <div className="inline-flex flex-wrap overflow-hidden text-4xl font-medium !leading-[1.5] sm:text-6xl">
        {typeof text === "string" &&
          text.split("").map((char: string, index: number) => (
            <motion.span
              key={char + "-" + index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: index * delay,
              }}
            >
              {char}
            </motion.span>
          ))}
      </div>
      <br />
    </>
  );
}

export default AniamtedText;
