import Link from "next/link";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} Haroun. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span>
        Built by <Link 
        className="text-blue-500 hover:underline"
        href={"https://github.com/noahdev0/"}>Noahdev</Link>
      </p>
    </footer>
  );
}
