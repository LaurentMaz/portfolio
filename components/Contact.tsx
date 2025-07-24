import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Contact</h4>
      <h2 className="text-center text-5xl font-ovo mb-10">
        Echangeons ensemble
      </h2>
      <p className="text-center max-w-2xl mx-auto mb-12 font-ovo">
        N'hésitez pas à me contacter ! Pour toute question ou commentaire,
        veuillez utiliser le formulaire ci-dessous. .
      </p>
      <ContactForm />
    </div>
  );
};

export default Contact;
