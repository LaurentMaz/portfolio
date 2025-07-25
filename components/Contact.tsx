import Image from "next/image";
import ContactForm from "./ContactForm";
import { ThemeProps } from "@/types/ThemeTypes";
import { motion } from "motion/react";

const Contact = ({ isDarkMode }: ThemeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Contact
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo mb-10"
      >
        Echangons ensemble
      </motion.h2>
      <p className="text-center max-w-2xl mx-auto mb-12 font-ovo">
        N'hésitez pas à me contacter ! Pour toute question ou commentaire,
        veuillez utiliser le formulaire ci-dessous. .
      </p>
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
