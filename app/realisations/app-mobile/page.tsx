import { assets } from "@/assets/assets";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Appmobile = () => {
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
          <div className="flex flex-col gap-4 mb-5 lg:flex-row">
            <div className="flex gap-1 items-center justify-center">
              <Image src={assets.calendar_icon} alt="" className="w-6 h-6" />
              2025
            </div>
            <div className="flex gap-1 items-center justify-center">
              <Image src={assets.pc_icon} alt="" className="w-6 h-6" />
              Application mobile
            </div>
            <div className="flex gap-1 items-center justify-center">
              <Image src={assets.build_icon} alt="" className="w-6 h-6" />
              Création d'une app mobile
            </div>
          </div>
          <h1 className="text-3xl lg:text-5xl text-center font-bold">
            React Native, application mobile de santé mentale
          </h1>
          <p className="text-lg my-5 text-center">
            Une application mobile pour aider les utilisateur à améliorer leure
            santé mentale et gérer leur stress en proposant des outils simples
            et adaptés à leur situation
          </p>
          {/* <a
            target="_blank"
            href="https://jeune-bienetre.fr/nos-centres-de-jeune/"
            className="bg-[#EC1552] px-5 py-3 rounded-2xl text-white font-bold"
          >
            Découvrir l'application
          </a> */}
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between w-[70%] m-auto mt-20 pb-20 gap-10 xl:gap-0">
          <div className="flex flex-1/2">
            <Image
              src={"/work-4.png"}
              alt=""
              width="500"
              height="500"
              className="shadow-xl"
            />
          </div>
          <div className="flex flex-col flex-1/2 gap-5">
            <p className="text-lg">
              Il s'agit d'un projet personnel en développement répondant à un
              besoin grandissant de la population: mieux <b>gérer son stress</b>{" "}
              et
              <b>améliorer sa santé mentale</b>.
            </p>
            <p className="text-lg">
              L'application a pour but de proposer des outils concrets, rapides
              et adaptés à chaque utilisateur en fonction de leurs besoins
              actuels.
            </p>
            <h2 className="text-lg font-bold">Les objectifs :</h2>
            <ul className="flex flex-col gap-3">
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Créer le design de l'app
              </li>
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Créer tous les outils de l'application
              </li>
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Définir et mettre en place l'architecture de l'application (BDD,
                authentification, back-end,front-end, rôles et permissions,
                stockage... )
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-[#F4F4F4]">
          <div className="w-[70%] m-auto py-20 items-center justify-center">
            <div>
              <h2 className="text-center text-3xl font-bold">
                Les technos et moyens mis en oeuvre :
              </h2>
            </div>
            <div className="flex gap-5 justify-center items-center pt-10">
              <p className="text-lg">
                React Native, appwrite, figma, canva, notion
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appmobile;
