import Image from "next/image";
import Link from "next/link";
import React from "react";
import { assets } from "@/assets/assets";

const page = () => {
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
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-xl font-bold">
              Système de recherche multicritères
            </h2>
            <p>
              Un système de recherche entre pour trouver facilement les
              différents logements proposés par l'entreprise selon de nombreux
              critères
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">Site e-commerce</h2>
            <p>
              Un site de vente en ligne complet pour vendre les compléments
              alimentaires vendus par l'entreprise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
