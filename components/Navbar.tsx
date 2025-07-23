import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50">
        <a href="#top">
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="Laurent MAZOYER logo"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3">
          <li>
            <a href="#top" className="font-ovo">
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo">
              A propos
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo">
              Réalisations
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo">
              Contact
            </a>
          </li>
        </ul>
        <div>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
          >
            Contact
            <Image src={assets.arrow_icon} className="w-3" alt="icone flèche" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
