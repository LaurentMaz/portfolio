import Image from "next/image";
import React from "react";
import { assets, infoList, toolsData } from "@/assets/assets";
import { ThemeProps } from "@/types/ThemeTypes";

const About = ({ isDarkMode }: ThemeProps) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">Présentation</h4>
      <h2 className="text-center text-5xl font-ovo">A propos de moi</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="image de profil"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-ovo">
            Spécialiste du web depuis 6 ans, je porte mon expertise sur les
            technologies typescript/ReactJS et PHP/Wordpress. Ma bonne
            communication avec les équipes est un atout indéniable permettant de
            répondre à mes exigences de détail, de performance et de qualité du
            travail apporté. Doté d’une forte autonomie sur les tâches qui me
            sont confiées, je sais m’adapter lors des échanges sur les solutions
            apportées afin de toujours répondre au mieux aux exigences des
            projets. La bienveillance, le respect et le progrès sont les valeurs
            avec lesquelles je souhaite travailler au quotidien
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-ovo dark:text-white/80">
            Outils utilisés
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="outil" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
