import Image from "next/image";
import { assets } from "@/assets/assets";
import { ThemeProps } from "@/types/ThemeTypes";

const Header = ({ isDarkMode }: ThemeProps) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="image de profil"
          className="rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Bonjour ! Je suis Laurent Mazoyer{" "}
        <Image src={assets.hand_icon} alt="icone main" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        Développeur Wordpress et expert web
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        Sites web sur mesure, stratégie locale, outils d’acquisition clients :
        je vous aide à faire du digital un vrai levier de croissance.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          Me contacter
          <Image
            src={assets.right_arrow_white}
            alt="icone flèche"
            className="w-4"
          />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          Mon CV
          <Image
            src={assets.download_icon}
            alt="icone téléchargement"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
