import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies([
    "user-consent",
    "session-cookies",
    "persistent-cookies",
    "essential-cookies",
    "performance-cookies",
    "functionality-cookies",
    "tracking-cookies",
  ]);

  // Utilisation de useState pour définir la visibilité initiale basée sur sessionStorage
  const [isVisible, setIsVisible] = useState(
    !sessionStorage.getItem("hideCookieConsent"),
  );

  useEffect(() => {
    if (cookies["user-consent"]) {
      // Si l'utilisateur a déjà accepté les cookies, ne pas afficher le consentement et stocker dans sessionStorage
      sessionStorage.setItem("hideCookieConsent", "true");
    }
  }, [cookies]); // Se déclenche lorsque les cookies changent

  const handleAccept = () => {
    const commonOptions = { path: "/", maxAge: 300000 }; // 30 jours pour l'exemple
    setCookie("user-consent", "accepted", commonOptions);
    setCookie("session-cookies", "accepted", commonOptions);
    setCookie("persistent-cookies", "accepted", commonOptions);
    setCookie("essential-cookies", "accepted", commonOptions);
    setCookie("performance-cookies", "accepted", commonOptions);
    setCookie("functionality-cookies", "accepted", commonOptions);
    setCookie("tracking-cookies", "accepted", commonOptions);
    sessionStorage.setItem("hideCookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    sessionStorage.setItem("hideCookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 z-30 flex flex-col  items-center justify-center border-t border-solid border-kiessColor bg-white py-20  font-jost  max-tablet820px:py-10">
      <div className="w-2/3 px-4 max-tablet820px:w-full ">
        <h2 className=" mb-5 text-xl font-bold text-secondKiessColor max-mobile:mb-1  max-mobile:text-medium">
          KIESS UTILISE DES COOKIES
        </h2>
        <p className="mb-5 text-blackTextColor max-mobile:text-sm ">
          KIESS utilise des cookies et des technologies similaires pour vous
          proposer une expérience en ligne et des publicités aussi
          personnalisées que possible, mais aussi pour analyser notre trafic
          web. Clique sur «Ok» si vous acceptez tous les cookies. Vous pouvez
          aussi choisir quels types de cookies tu acceptes en cliquant sur «Je
          veux choisir» Enfin, pour en savoir plus, n'hésitez pas à consulter
          notre avis sur les cookies {""}
          <a href="/Conditions" className="underline">
            notre avis sur les cookies
          </a>
          .
        </p>
        <div className="flex gap-5">
          <button
            onClick={handleDecline}
            className="block w-buttonsCookiesWidth border border-solid border-black"
          >
            <p className="font-semibold text-blackTextColor max-mobile:text-sm">
              {" "}
              REFUSER LES COOKIES
            </p>
          </button>
          <button
            onClick={handleAccept}
            className=" block w-buttonsCookiesWidth  bg-gradient-to-r from-kiessColor to-pinkKiess py-2"
          >
            <p className="font-semibold text-white max-mobile:text-sm">
              J'ACCEPTE
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
