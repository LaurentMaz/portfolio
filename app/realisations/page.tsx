"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { assets, workData } from "@/assets/assets";
import { useDarkMode } from "@/context/DarkModeContext";

const page = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="m-auto">
      <Link href="/#work">
        <div className="flex justify-end items-center py-6 pr-24 w-full sticky top-0 right-0 bg-white/50 backdrop-blur-lg dark:bg-darkTheme dark:shadow-white/20">
          <div className="bg-black p-3 rounded-full hover:bg-gray-700">
            <Image src={assets.close_white} alt="" className="w-5 h-5" />
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-center flex-col gap-10">
        <h1 className="text-center text-4xl"> Mes réalisations</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-[80%]">
          {workData.map(({ title, descFull }, index) => (
            <div
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
              key={index}
            >
              <h3 className="text-lg font-bold my-4 to-gray-700 dark:text-white">
                {title}
              </h3>
              <p className="text-sm to-gray-600 leading-5 dark:text-white/80">
                {descFull}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
