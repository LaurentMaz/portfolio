import { assets, serviceData } from "@/assets/assets";
import { ThemeProps } from "@/types/ThemeTypes";
import Image from "next/image";
import React from "react";

const Services = ({ isDarkMode, setIsDarkMode }: ThemeProps) => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-ovo">
        Stack WordPress moderne
      </h4>
      <h2 className="text-center text-5xl font-ovo mb-10">Mes compétences</h2>
      <p className="text-center max-w-2xl mx-auto mb-12 font-ovo">
        Développement de thèmes et plugins sur mesure, intégration moderne avec
        React (Gutenberg, front), optimisation SEO et performance, gestion fine
        des rôles et des API : une maîtrise complète de WordPress en production.
      </p>
      <div className="grid grid-cols-[grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10 ">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 to-gray-700">{title}</h3>
            <p className="text-sm to-gray-600 leading-5">{description}</p>
            <a className="flex items-center gap-2 text-sm mt-5" href={link}>
              En savoir plus{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
