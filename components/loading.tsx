"use client";
import Image from "next/image";
import React from "react";

type Props = {};

const loading = (props: Props) => {
  return (
    <div>
      <div>
        <Image src="./favicon.ico" alt="loading image" />
      </div>
    </div>
  );
};

export default loading;
