import Image from "next/image";
import { assets } from "@/assets/assets";
import { useEffect, useRef, useState } from "react";
import { ThemeProps } from "@/types/ThemeTypes";

const Navbar = ({ isDarkMode, setIsDarkMode }: ThemeProps) => {
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyage pour éviter les fuites mémoire
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-70%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`flex items-center justify-between w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 ${
          isScroll &&
          "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt="Laurent MAZOYER logo"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${
            !isScroll &&
            "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
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
              Compétences
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
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode!((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="icone lune de theme"
              className="w-6 cursor-pointer"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="icone flèche"
            />
          </a>
          <button className="block md:hidden ml-3">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="icone menu"
              className="w-6 cursor-pointer"
              onClick={openMenu}
            />
          </button>
        </div>

        {/* -- ----- menu mobile ----- -- */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close menu"
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a href="#top" className="font-ovo" onClick={closeMenu}>
              Accueil
            </a>
          </li>
          <li>
            <a href="#about" className="font-ovo" onClick={closeMenu}>
              A propos
            </a>
          </li>
          <li>
            <a href="#services" className="font-ovo" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-ovo" onClick={closeMenu}>
              Réalisations
            </a>
          </li>
          <li>
            <a href="#contact" className="font-ovo" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
