import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const ContactForm = () => {
  const [result, setResult] = useState<string>();
  const [loading, setLoading] = useState(false);

  // @ts-ignore
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "c2f93057-c142-4bee-9a13-f9d08b775b48");

    try {
      setLoading(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult("Formulaire envoyé");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-[grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
        <input
          type="text"
          placeholder="Entrez votre nom"
          required
          className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          name="name"
        />
        <input
          type="text"
          placeholder="Entrez votre email"
          required
          className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          name="email"
        />
      </div>
      <textarea
        rows={6}
        placeholder="Entrez votre message"
        required
        className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
        name="message"
      ></textarea>
      <button
        disabled={loading}
        type="submit"
        className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
      >
        {!loading ? (
          <>
            Envoyer
            <Image
              src={assets.right_arrow_white}
              alt="arrow icon"
              className="w-4"
            />
          </>
        ) : (
          <ClipLoader
            color="#ffffff"
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}
      </button>
      {result && (
        <p className="mt-4 text-center flex items-center justify-center gap-2">
          {result}
          <Image src={assets.send_icon} alt="send icon" className="w-5" />
        </p>
      )}
    </form>
  );
};

export default ContactForm;
