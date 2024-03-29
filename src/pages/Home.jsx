// utils
import baseUrl from "../baseUrl";

// Components import
import Footer from "../components/Footer";

// Import package
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { Checkbox } from "@nextui-org/react";

const Home = () => {
  const controls = useAnimation();

  const [email, setEmail] = useState("");
  const [conditions, setConditions] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleConditions = (e) => {
    setConditions(e.target.checked);
  };

  const handleNewsletter = (e) => {
    setNewsletter(e.target.checked);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const email_pattern = /^[^\s@]+@[a-z0-9]+(\.[a-z]{2,3}){1,2}$/;
      const testEmail = email_pattern.test(email);

      if (!testEmail) {
        throw new Error("invalid e-mail address");
      }

      if (!conditions) {
        throw new Error("conditions must be accepted");
      }

      const response = await axios.post(`${baseUrl}/user/register`, {
        email: email,
        conditions: conditions,
        newsletter: newsletter,
      });

      console.log(response.data);
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      className=" flex min-h-mainHeight flex-col font-jost max-mobile:justify-normal "
    >
      <motion.h1
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex"
      >
        <section className="maxscreen1260px:max-w-5xl max-tablet820px:fit min-tablet820px:justify-center mx-auto mt-10 flex max-w-6xl items-center max-screen1260px:gap-x-10 screen2000px:gap-x-24">
          <div className="mr-5 flex  flex-col max-tablet820px:w-auto">
            <div className="mb-10 mr-10 text-7xl max-tablet820px:mr-0 max-mobile:mb-5 max-mobile:flex max-mobile:justify-center">
              <img
                src="/assets/images-main-page/baseline.svg"
                alt="Decouvrez qui vous rencontrez"
                className=" w-96 max-screen1260px:w-96 max-mobile:w-72 screen2000px:w-mainBaseline2000pxWidth"
              />
            </div>
            <div className="mb-10 ml-1 pl-1 text-blackTextColor max-mobile:mb-8 max-mobile:ml-1 max-mobile:pl-0 screen2000px:text-lg">
              <h1>Avec Kiess,</h1>

              <p>découvrez le physique et la personnalité</p>
              <p>de votre match simultanément</p>
            </div>

            <form
              className="ml-1 flex flex-col gap-y-2 pl-1 text-blackTextColor max-mobile:mb-8 max-mobile:ml-0 max-mobile:w-72"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Adresse mail"
                className=" mb-3 w-72 rounded-md bg-inputColor py-2 pl-5 text-black placeholder:text-gray-500 max-tablet820px:w-full"
                onChange={handleEmail}
              />

              <div className="mb-2 ml-3 flex">
                <Checkbox
                  radius="none"
                  color="default"
                  size="sm"
                  className="flex -translate-x-1 self-start "
                  onChange={handleConditions}
                ></Checkbox>

                <div className="ml-2">
                  <p>
                    J'accepte les{" "}
                    <Link to={"/conditions"} className="font-bold underline">
                      Conditions générales d'utilisation
                    </Link>
                  </p>
                  <p>Sans votre accord votre compte ne pourra être créé.</p>
                </div>
              </div>

              <div className="mb-2 ml-3 flex">
                <Checkbox
                  radius="none"
                  color="default"
                  size="sm"
                  className="flex -translate-x-1 self-start "
                  onChange={handleNewsletter}
                ></Checkbox>
                <div className="ml-2 w-96">
                  <p>
                    J'accepte que mon adresse éléctronique soit utilisé pour
                  </p>
                  <p>recevoir des offres de Kiess Inc.</p>
                </div>
              </div>

              <div className="mb-10 flex items-center max-tablet820px:justify-center max-mobile:mb-10 max-mobile:flex-col max-mobile:items-center">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 10px rgba(255, 126, 95, 0.8)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="mr-4 rounded-lg bg-gradient-to-tr from-kiessColor to-pinkKiess px-7 py-2 font-semibold text-white max-mobile:mb-2 max-mobile:mr-0"
                  type="submit"
                >
                  S'inscrire à la BETA
                </motion.button>
              </div>
            </form>
            <div className="flex gap-x-2 max-tablet820px:mb-10 max-tablet820px:justify-center max-mobile:mb-10">
              <a href="#">
                <img
                  src="/assets/storessvg/App store SVG.svg"
                  alt="bouton d'accès à l'App store"
                  className="w-32"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/storessvg/Google play SVG.svg"
                  alt="bouton d'accès au play store"
                  className="w-32"
                />
              </a>
            </div>
          </div>
          <div className="relative flex justify-end max-tablet820px:hidden">
            <img
              src="/assets/images-main-page/telephone.png"
              alt="telephone portable qui affiche l'application kiess"
              className=" z-20 w-mainPhoneWidth -translate-x-10  max-screen1260px:w-72 max-screen1260px:translate-x-0 max-tablet820px:w-48 screen2000px:w-96"
            />
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.3}
              className="screen2000px: absolute -right-7 top-5 z-30 w-mainBadgesWidth max-screen1260px:-left-14 max-screen1260px:top-10 max-screen1260px:w-96 screen2000px:-left-28 screen2000px:w-mainAssets2000pxWidth "
            >
              <img
                src="/assets/images-main-page/Badges-devant-le-telephone.png"
                alt="Badges colorés kiess"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={-0.3}
              factorY={-0.2}
              className="absolute -right-12 top-0 z-10 w-mainScreensWidth max-screen1260px:w-96 screen2000px:w-mainAssets2000pxWidth"
            >
              <img
                src="/assets/images-main-page/Photo-derriere-le-telephone.png"
                alt="un écran de devinette des jeux sur kiess"
              />
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={-0.3}
              factorY={-0.2}
              className="absolute -right-7 -top-6 z-30  w-mainScreensWidth max-screen1260px:-right-4 max-screen1260px:top-1 max-screen1260px:w-96 max-tablet820px:flex-none screen2000px:right-0 screen2000px:top-5  screen2000px:w-mainAssets2000pxWidth "
            >
              <img
                src="/assets/images-main-page/Photos-devant-le-telephone.png"
                alt="Deux écrans de devinette des jeux sur kiess"
              />
            </MouseParallaxChild>
          </div>
        </section>
      </motion.h1>
      <Footer />
    </MouseParallaxContainer>
  );
};

export default Home;
