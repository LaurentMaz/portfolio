"use client";

import { assets } from "@/assets/assets";
import { useDarkMode } from "@/context/DarkModeContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SiteVitrine = () => {
  const { isDarkMode } = useDarkMode();
  return (
    <>
      <div className={`m-auto ${isDarkMode ? "bg-[#11001F]" : ""}`}>
        <Link href="/#work">
          <div className="flex justify-end items-center py-6 pr-24 w-full sticky top-0 right-0 bg-white/50 backdrop-blur-lg dark:bg-darkTheme dark:shadow-white/20">
            <div className="bg-black p-3 rounded-full hover:bg-gray-700">
              <Image src={assets.close_white} alt="" className="w-5 h-5" />
            </div>
          </div>
        </Link>
        <div
          className={`rounded-4xl p-16 flex flex-col justify-center items-center ${
            isDarkMode ? "bg-[#19002c]" : "bg-[#F7F2E8]"
          } w-[70%] m-auto`}
        >
          <div className="flex flex-col gap-4 mb-5 lg:flex-row">
            <div className="flex gap-1 items-center justify-center">
              <Image src={assets.calendar_icon} alt="" className="w-6 h-6" />
              2025
            </div>
            <div className="flex gap-1 items-center justify-center">
              <Image src={assets.pc_icon} alt="" className="w-6 h-6" />
              Site vitrine
            </div>
            <div className="flex gap-1 items-center justify-center">
              <Image src={assets.build_icon} alt="" className="w-6 h-6" />
              Création d'un site vitrine
            </div>
          </div>
          <h1 className="text-3xl lg:text-5xl text-center font-bold">
            Loire Autos, site vitrine complet pour un garage Renault
          </h1>
          <p className="text-lg my-5 text-center">
            Accompagnement et création d'un site vitrine complet système de
            recherche des véhicules en ventes.
          </p>
          <a
            target="_blank"
            href="https://loire-autos.fr"
            className="bg-[#EC1552] px-5 py-3 rounded-2xl text-white font-bold"
          >
            Découvrir le site
          </a>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between w-[70%] m-auto mt-20 pb-20 gap-10 xl:gap-0">
          <div className="flex flex-1/2">
            <Image
              src={"/work-3.png"}
              alt=""
              width="500"
              height="500"
              className="shadow-xl"
            />
          </div>
          <div className="flex flex-col flex-1/2 gap-5">
            <p className="text-lg">
              Loire Autos est un garage automobile, agent Renault et Dacia
              proposant ses services de réparation, contrôle, carrosserie
              automobile.
            </p>
            <p className="text-lg">
              L'entreprise n'avait pas de site et souhaitait avoir{" "}
              <b>une vitrine pour son image professionnelle</b> tout en
              permettant aux clients de constulter les véhicules en ventes.
            </p>
            <h2 className="text-lg font-bold">Les objectifs :</h2>
            <ul className="flex flex-col gap-3">
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Créer tout le design et le site vitrine
              </li>
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Optimiser le site pour le SEO
              </li>
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Permettre l'ajout/supression/modification des véhicules en
                ventes depuis le back office
              </li>
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Créer un système de filtre et recherche simple pour les
                véhicules
              </li>
            </ul>
          </div>
        </div>
        <div className={`${isDarkMode ? "bg-[#19002c]" : "bg-[#F4F4F4]"}`}>
          <div className="w-[70%] m-auto py-20 items-center justify-center">
            <div>
              <h2 className="text-center text-3xl font-bold">
                Les technos et moyens mis en oeuvre :
              </h2>
            </div>
            <div className="flex gap-5 justify-center items-center pt-10">
              <p className="text-lg">
                ACF, custom blocks, CF7, React.JS, CPT, wp_query...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteVitrine;
