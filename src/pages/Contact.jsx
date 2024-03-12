// Package import
import { motion } from "framer-motion";
import React, { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

// Components imports
import Footer from "../components/Footer";
import FormWrapper from "../components/formWrapper";

const Contact = () => {
  const [files, setFiles] = useState([]);

  const [isOpenSubscribe, setIsOpenSubscribe] = useState(false);
  const [subscribe, setSubscribe] = useState("-");
  const subscribeChoices = ["oui", "non"];

  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  const [question, setQuestion] = useState("-");
  const questionChoices = [
    "Pourquoi ça marche pas ?",
    "J'ai perdu mon compte ?",
    "Signaler un bug ?",
  ];

  const subscribeRef = useRef(null);
  const questionRef = useRef(null);

  const handleOpenSubscribe = () => {
    setIsOpenSubscribe(true);
  };

  const handleOpenQuestion = () => {
    setIsOpenQuestion(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("");
  };

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

          <form className=" text-blackTextColor" onSubmit={handleSubmit}>
            <div className="ml-10 flex w-3/4 flex-col gap-1 ">
              <label htmlFor="mail">
                Adresse e-mail<span className="text-red-400">*</span>
              </label>

              <input
                type="email"
                id="mail"
                className=" rounded-xl border border-solid border-inputColor pl-3"
              />

              <label htmlFor="subscribe">
                As-tu as abonnement ?<span className="text-red-400">*</span>
              </label>

              <div className="relative">
                <p
                  className="h-7 rounded-xl border border-solid border-inputColor pl-3"
                  onClick={handleOpenSubscribe}
                >
                  {subscribe}
                </p>
                {isOpenSubscribe && (
                  <FormWrapper
                    array={subscribeChoices}
                    setter={setSubscribe}
                    ref={subscribeRef}
                    isOpen={isOpenSubscribe}
                    setIsOpen={setIsOpenSubscribe}
                  />
                )}
              </div>

              <label htmlFor="question">
                Ta question<span className="text-red-400">*</span>
              </label>

              <div className="relative z-10">
                <p
                  className="h-7 rounded-xl border border-solid border-inputColor pl-3"
                  onClick={handleOpenQuestion}
                >
                  {question}
                </p>

                {isOpenQuestion && (
                  <FormWrapper
                    array={questionChoices}
                    setter={setQuestion}
                    ref={questionRef}
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
                rows="10"
                className="rounded-xl border border-solid border-inputColor pl-3 pt-3"
              ></textarea>

              <p className="text-md text-slate-400">
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
              />

              <label htmlFor="file">
                Pièces jointes{" "}
                <span className="text-slate-400">(valeur facultative)</span>
                <div className="flex justify-center rounded-xl border border-solid border-inputColor pl-3 ">
                  <MyDropzone setFiles={setFiles} files={files} />
                </div>
                {files.map((file) => (
                  <li key={file.path}>
                    {file.path} - {file.size} bytes{" "}
                    <span
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
                    </span>
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

      setFiles(acceptedFiles);

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
      <input
        {...getInputProps()}
        onChange={() => {
          console.log("hello");
        }}
      />
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
