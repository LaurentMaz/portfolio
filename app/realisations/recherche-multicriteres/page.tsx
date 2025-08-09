import { assets } from "@/assets/assets";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const RechercheMulticriteres = () => {
  return (
    <>
      <div className="m-auto">
        <Link href="/#work">
          <div className="flex justify-end items-center py-6 pr-24 w-full sticky top-0 right-0 bg-white/50 backdrop-blur-lg dark:bg-darkTheme dark:shadow-white/20">
            <div className="bg-black p-3 rounded-full hover:bg-gray-700">
              <Image src={assets.close_white} alt="" className="w-5 h-5" />
            </div>
          </div>
        </Link>
        <div className="rounded-4xl p-16 flex flex-col justify-center items-center bg-[#F7F2E8] w-[70%] m-auto">
          <div className="flex gap-4 mb-5">
            <div className="flex gap-1 items-center justify-center">
              <Image src={assets.calendar_icon} alt="" className="w-6 h-6" />
              2024
            </div>
            <div className="flex gap-1 items-center justify-center">
              <Image src={assets.pc_icon} alt="" className="w-6 h-6" />
              Application web
            </div>
            <div className="flex gap-1 items-center justify-center">
              <Image src={assets.build_icon} alt="" className="w-6 h-6" />
              Création d'une app web Wordpress/React
            </div>
          </div>
          <h1 className="text-5xl text-center font-bold">
            Recherche multicritères, application custom au sein de Wordpress
          </h1>
          <p className="text-lg my-5">
            Un système de recherche entre pour trouver facilement les différents
            logements proposés par l'entreprise selon de nombreux critères
          </p>
          <a
            href="https://jeune-bienetre.fr/nos-centres-de-jeune/"
            className="bg-[#EC1552] px-5 py-3 rounded-2xl text-white font-bold"
          >
            Découvrir l'application
          </a>
        </div>

        <div className="flex items-start justify-between w-[70%] m-auto mt-20">
          <div className="flex flex-1/2">
            <Image src={"/work-1.png"} alt="" width="500" height="500" />
          </div>
          <div className="flex flex-col flex-1/2 gap-5">
            <p className="text-lg">
              Jeûne & Bien-être est une entreprise française proposant de
              nombreux lieux/centres avec des programmes d'accompagnement au{" "}
              <b>jeûne</b> et à la <b>détox</b>.
            </p>
            <p className="text-lg">
              Avec de nombreux clients et années d'expérience le réseau s'est
              aggrandit accueillant ainsi plusieurs dizaines de centres à
              travers la France. La recherche du lieu idéal pour le client était
              donc devenu <b>un enjeux majeur pour l'entreprise</b>.
            </p>
            <h2 className="text-lg font-bold">Les objectifs :</h2>
            <ul className="flex flex-col gap-3">
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Faciliter la recherche pour le client
              </li>
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Améliorer l'UX et l'UI
              </li>
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Créer un système performant, rapide avec de nombreuses
                contraintes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RechercheMulticriteres;
