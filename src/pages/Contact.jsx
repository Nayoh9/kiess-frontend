// Utils import
import baseUrl from "../baseUrl";

// Package import
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

// Components imports
import Footer from "../components/Footer";
import FormWrapper from "../components/formWrapper";

const Contact = () => {
  const [windowWidth, setWindowWidth] = useState();
  const [files, setFiles] = useState([]);

  const [isOpenSubscribe, setIsOpenSubscribe] = useState(false);
  const [subscribe, setSubscribe] = useState("-");
  const subscribeChoices = ["Oui", "Non"];

  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  const [question, setQuestion] = useState("-");
  const questionChoices = [
    "Pourquoi ça marche pas ?",
    "J'ai perdu mon compte ?",
    "Signaler un bug ?",
    "Autre question",
  ];

  const formRef = useRef(null);

  const [formDetails, setFormDetails] = useState({
    email: "",
    description: "",
    tel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => {
      return { ...prev, [name]: value };
    });

    console.log(name, value);
  };

  const handleOpenSubscribe = () => {
    setIsOpenSubscribe(true);
  };

  const handleOpenQuestion = () => {
    setIsOpenQuestion(true);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log(files);

      const formData = new FormData();
      formData.append("email", formDetails.email);
      formData.append("subscriber", subscribe === "Oui" ? true : false);
      formData.append("question", question);
      formData.append("description", formDetails.description);
      formData.append("tel", formDetails.tel);
      files.forEach((file) => {
        formData.append("screenshot", file);
      });

      const response = await axios.post(
        `${baseUrl}/contact/request`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <main className="flex min-h-mainHeight justify-center font-jost">
      <motion.section
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="flex flex-col items-center"
      >
        <div className=" my-10 w-2/5 max-w-2xl bg-white max-screen1260px:w-2/4 max-tablet820px:w-3/4">
          <h1 className="font m-5 mb-10 text-3xl max-mobile:text-xl ">
            <span className="border-b-2 border-solid max-mobile:text-xl">
              Env
            </span>
            oyer une demande
          </h1>

          <form className="  text-blackTextColor" onSubmit={handleSubmit}>
            <div className="ml-10 flex w-3/4 flex-col gap-1 ">
              <label htmlFor="mail">
                Adresse e-mail<span className="text-red-400">*</span>
              </label>

              <input
                type="email"
                id="mail"
                name="email"
                className=" rounded-xl border border-solid border-inputColor pl-3"
                onChange={handleChange}
              />

              <label htmlFor="subscribe">
                As-tu as abonnement ?<span className="text-red-400">*</span>
              </label>

              <div className="relative">
                <input
                  type="text"
                  id="subscribe"
                  readOnly={true}
                  className="h-7 w-full rounded-xl border border-solid border-inputColor pl-3"
                  onClick={handleOpenSubscribe}
                  value={subscribe}
                />

                {isOpenSubscribe && (
                  <FormWrapper
                    array={subscribeChoices}
                    setter={setSubscribe}
                    ref={formRef}
                    isOpen={isOpenSubscribe}
                    setIsOpen={setIsOpenSubscribe}
                  />
                )}
              </div>

              <label htmlFor="question">
                Ta question<span className="text-red-400">*</span>
              </label>

              <div className="relative z-10">
                <input
                  className="h-7 w-full rounded-xl border border-solid border-inputColor pl-3"
                  onClick={handleOpenQuestion}
                  id="question"
                  value={question}
                  readOnly={true}
                />

                {isOpenQuestion && (
                  <FormWrapper
                    array={questionChoices}
                    setter={setQuestion}
                    ref={formRef}
                    isOpen={isOpenQuestion}
                    setIsOpen={setIsOpenQuestion}
                  />
                )}
              </div>

              <label htmlFor="description">
                Description<span className="text-red-400">*</span>
              </label>

              <textarea
                id="description"
                cols="30"
                rows={window.innerWidth < 500 ? "5" : "10"}
                name="description"
                className="rounded-xl border border-solid border-inputColor pl-3 pt-3"
                onChange={handleChange}
              ></textarea>

              <p className="text-md ">
                Saisissez les details de votre demande. Un membre de notre
                équipe d'assistance répondrea dans les plus brefs délais.
              </p>

              <label htmlFor="telephone">
                Numéro de téléphone portable{" "}
                <span className="text-slate-400">(valeur facultative)</span>
              </label>

              <input
                type="tel"
                className="rounded-xl border border-solid border-inputColor pl-3"
                id="telephone"
                name="tel"
                onChange={handleChange}
              />

              <label htmlFor="file">
                Pièces jointes{" "}
                <span className="text-slate-400">(valeur facultative)</span>
                <div className="flex justify-center rounded-xl border border-solid border-inputColor pl-3 ">
                  <MyDropzone setFiles={setFiles} files={files} />
                </div>
                {files.map((file, index) => (
                  <li key={file.path}>
                    {file.path} - {file.size} bytes{" "}
                    <button
                      onClick={() => {
                        const copyFiles = [...files];
                        for (let i = 0; i < copyFiles.length; i++) {
                          if (copyFiles[i].path === file.path) {
                            copyFiles.splice(i, 1);
                          }
                        }
                        setFiles(copyFiles);
                      }}
                    >
                      x
                    </button>
                  </li>
                ))}
              </label>

              <div className="flex justify-end">
                <button
                  className="my-5 rounded-xl bg-blackTextColor px-14 py-1 text-sm text-white"
                  type="submit"
                >
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

function MyDropzone({ setFiles, files }) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      setFiles((prev) => {
        return [...prev, file];
      });

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        // console.log(binaryStr);
      };
      reader.readAsDataURL(file);
      // console.log(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "text/html": [".html", ".htm"],
    },
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps({ type: "file" })} />

      <p className="text-green-400">
        Ajouter un fichier{" "}
        <span className="text-slate-400">
          ou faites glisser les fichiers ici
        </span>
      </p>
    </div>
  );
}

export default Contact;
