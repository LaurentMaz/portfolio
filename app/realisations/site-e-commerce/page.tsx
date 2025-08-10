import { assets } from "@/assets/assets";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const SiteEcommerce = () => {
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
              2020
            </div>
            <div className="flex gap-1 items-center justify-center">
              <Image src={assets.pc_icon} alt="" className="w-6 h-6" />
              Site e-commerce
            </div>
            <div className="flex gap-1 items-center justify-center">
              <Image src={assets.build_icon} alt="" className="w-6 h-6" />
              Création d'un site e-commerce
            </div>
          </div>
          <h1 className="text-3xl lg:text-5xl text-center font-bold">
            Woocommerce, site e-commerce complet de vente de compléments
            alimentaires
          </h1>
          <p className="text-lg my-5 text-center">
            Un site de vente en ligne complet pour vendre les compléments
            alimentaires vendus par l'entreprise
          </p>
          {/* <a
            href="https://jeune-bienetre.fr/nos-centres-de-jeune/"
            className="bg-[#EC1552] px-5 py-3 rounded-2xl text-white font-bold"
          >
            Découvrir le site
          </a> */}
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between w-[70%] m-auto mt-20 pb-20 gap-10 xl:gap-0">
          <div className="flex flex-1/2">
            <Image
              src={"/work-2.png"}
              alt=""
              width="500"
              height="500"
              className="shadow-xl"
            />
          </div>
          <div className="flex flex-col flex-1/2 gap-5">
            <p className="text-lg">
              Sywell Laboratoire était un partenaire de Jeûne & Bien-être qui
              proposait à la vente ses <b>compléments alimentaires</b> pour
              accompagner les clients vers le <b>bien-être</b> et la{" "}
              <b>détox</b>
            </p>
            <p className="text-lg">
              Le projet à vu le jour suite au développement de Jeûne & Bien-être
              qui proposait déjà un produit pour accompagner les cures de jeûne.
              L'entreprise à voulu rendre plus professionnel et accessible ses
              produits tout en élargissant sa gamme et en la proposant au client
              à travers un vrai site de vente en ligne complet.
            </p>
            <h2 className="text-lg font-bold">Les objectifs :</h2>
            <ul className="flex flex-col gap-3">
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Créer un site e-commerce complet
              </li>
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Faciliter l'accès aux produits et optimiser les ventes
              </li>
              <li className="before:content-['✔'] before:text-[#ec1552] before:mr-2 text-xl">
                Gérer les produits et leurs contraintes (livraison, paiement, n°
                lot, stocks,...)
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
                Création et gestion globale d'un site marchand (Woocommerce,
                hooks, PHP custom, page produit, gestion de stock avec n°lot et
                DLUO...)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteEcommerce;
