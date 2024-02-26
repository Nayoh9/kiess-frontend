// Package import
import { motion } from "framer-motion";

// Components imports
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <main className="flex min-h-mainHeight justify-center font-jost">
      <motion.section
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <div className=" w-2/5 bg-white">
          <h1 className="font m-5 mb-10 text-3xl ">
            <span className="border-b-2 border-solid">Env</span>oyer une demande
          </h1>

          <form className=" text-blackTextColor">
            <div className="ml-10 flex w-3/4 flex-col gap-1 ">
              <label htmlFor="mail">Adresse e-mail</label>
              <input
                type="email"
                id="mail"
                className=" rounded-xl border border-solid border-gray-300 pl-3"
              />
              <label htmlFor="subscribe">As-tu as abonnement ?</label>
              <input
                type="text"
                id="subscribe"
                className="rounded-xl border border-solid border-gray-300 pl-3"
              />
              <label htmlFor="question">Ta question</label>
              <input
                type="text"
                className="rounded-xl border border-solid border-gray-300 pl-3"
                id="question"
              />
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                cols="30"
                rows="10"
                className="rounded-xl border border-solid border-gray-300 pl-3 pt-3"
              ></textarea>
              <p className="text-md text-gray-400">
                Saisissez les details de votre demande. Un membre de notre
                équipe d'assistance répondrea dans les plus brefs délais.
              </p>
              <label htmlFor="telephone">
                Numéro de téléphone portable (valeur facultative)
              </label>
              <input
                type="tel"
                className="rounded-xl border border-solid border-gray-300 pl-3"
                id="telephone"
              />
              <label htmlFor="file">Pièces jointes (valeur facultative)</label>
              <input
                type="file"
                id="file"
                className="rounded-xl border  border-solid border-gray-300 pl-3"
              />
              <div className="flex justify-end">
                <button className="my-5 rounded-xl bg-blackTextColor px-14 py-1 text-sm text-white">
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </motion.section>
    </main>
  );
};

export default Contact;
