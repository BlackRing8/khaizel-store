"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";
const currentYear = new Date().getFullYear();

const LINKS = [
  {
    title: "About us",
    items: ["Store", "Resources", "Maps"],
  },
  {
    title: "Collection",
    items: ["T-Shirt", "Hijab", "Dress"],
  },
  {
    title: "Social Media",
    items: ["Blog", "Instagram", "Facebook"],
  },
];

function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-1">
            Khaizel Fashion
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="small" color="blue-gray" className="mb-3 font-medium opacity-40">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography as="a" href="#" color="gray" className="py-1.5 font-normal transition-colors hover:text-blue-gray-900">
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography variant="small" className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {currentYear} <a href="https://material-tailwind.com/">BlackRIng_dev</a>. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
