import React from "react";
/* <img
src="/contact.svg"
className="p-[1px] w-5 h-5 rounded-lg bg-text-modal-light"alt="contact"></img> */
import { useState } from "react";
import { Tooltip } from "@nextui-org/tooltip";
import { Avatar } from "@nextui-org/avatar";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

export default function AvatarPicture() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("blur");
  const placement = ["top"];
  const handleOpen = () => {
    setBackdrop("blur");
    onOpen();
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "aridany6@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    });
  };

  return (
    <>
      <header
        className="font-bold xl:mt-[0%] mt-[30%] flex flex-col gap-10 xl:gap-20 
      items-center text-text-modal-light"
      >
        <h1 id="" className="flex justify-center text-xl xl:text-5xl">
          Aridany de la Fe Sarmiento
        </h1>

        <div className="flex items-center justify-center ">
          <Tooltip
            showArrow={false}
            content={
              <p className="px-2 font-bold rounded bg-text-modal-darker text-text-modal-light">
                Click about me!
              </p>
            }
            placement={placement}
          >
            <Avatar
              src="/foto.jfif"
              className="w-40 xl:border-[6px] border-4 border-background-page h-40 xl:w-[15vw]
              xl:h-[30vh]"
            />
          </Tooltip>
        </div>

        <p className="text-lg md:text-xs xl:text-4xl " id="AboutMe">
          Frontend Developer
        </p>

        <button
          id="Contact"
          className="h-10 px-5 transition-colors duration-150 border-2 rounded-lg xl:text-2xl xl:w-auto xl:h-auto hover:animate-text-shake text-text-modal-light border-text-modal-light focus:shadow-outline hover:bg-text-modal-light hover:text-background-page"
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        >
          About me
        </button>

        <div className="flex flex-col items-center gap-4 font-bold ">
          <p className="flex items-center gap-3 xl:text-xl xl:mb-5">Contact</p>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/aridany-de-la-fe-sarmiento-707438272/"
              target="_blank"
              className=""
            >
              <img
                src="/linkedin.svg"
                alt="linkedin"
                className="p-[1px] mx-4 rounded-lg bg-text-modal-light hover:shadow-xl hover:opacity-70 hover:animate-text-shake"
              ></img>
            </a>

            <a href="https://github.com/AridanyS" target="_blank">
              <img
                src="/github.svg"
                alt="github"
                className="mx-4  rounded-lg p-[1px] bg-text-modal-light hover:shadow-xl hover:opacity-70 hover:animate-text-shake "
              ></img>
            </a>

            <button id="copyButton" onClick={handleCopy} target="_blank">
              <img
                src="/mail.svg"
                alt="email"
                className="mx-4 rounded-lg p-[1px] bg-text-modal-light hover:shadow-xl hover:opacity-70 hover:animate-text-shake"
              ></img>
            </button>
            {copied && (
              <p className="fixed bottom-0 right-0 z-10 p-1 px-1 text-sm rounded-lg xl:bottom-10 xl:right-20 xl:text-xl text-text-modal-light bg-background-page opacity-90">
                Mail copied to clipboard!
              </p>
            )}
          </div>
        </div>
      </header>

      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent className="p-1 rounded-lg bg-background-Modal opacity-95 text-text-modal">
          {
            <>
              <ModalHeader className="flex flex-col gap-1 pt-3 pb-2 text-base font-bold lg:text-lg ">
                About me
                <div className="h-[0.5px] bg-text-modal" />
              </ModalHeader>

              <ModalBody className="">
                <article>
                  <section className=" text-[11px] xl:text-[15px]">
                    <p className="mb-2">
                      ¡Hola! Soy Aridany, desarrollador Frontend en busca de aplicar
                       mis conocimientos mediante la adaptación al
                      entorno laboral. Recientemente hice un viaje de 1400 km
                      para lograrlo y si estás interesado en conocerme un poco
                      más, por favor, sigue leyendo.
                    </p>
                    <p className="mb-2">
                      He estado en varios sectores como la administración
                      contable, instalaciones frigoríficas, almacenes, etc. Pero
                      el más destacable para mí es el Desarrollo Web,
                      enfocándome por ahora en el Frontend.
                    </p>
                    <p className="mb-2">
                      En Canarias, tuve la gran oportunidad de asistir a un
                      Programa de Formación en Alternancia con el Empleo (PFAE)
                      en el que estuve un año y donde descubrí este mundo.
                      Desde entonces, me enamoré de él.
                    </p>

                    <p className="mb-2">
                      El estar en varios sectores y situaciones me ha permitido
                      desarrollar habilidades como la buena incorporación a
                      diferentes entornos laborales, conocimiento de la cadena
                      de trabajo tanto en PYMES como en grandes empresas y la
                      rápida adaptación a distintas tecnologías y proyectos.
                    </p>

                    <p className="mb-2">
                      <h2 className="pb-2 text-base font-bold lg:text-lg ">
                        Contacto
                        </h2>
                      <div className="h-[1px] bg-text-modal mb-2 gap-5"></div>
                      Estoy interesado en conocer sobre nuevos proyectos y
                      oportunidades laborales. Si estás interesado en ello,
                      puedes contactarme en cualquier momento.
                    </p>
                  </section>
                </article>
              </ModalBody>
              <ModalFooter className="flex items-center justify-between">
                <div className="flex flex-col items-center font-bold">
                  <div className="flex items-center">
                    <a
                      href="https://www.linkedin.com/in/aridany-de-la-fe-sarmiento-707438272/"
                      target="_blank"
                      className=""
                    >
                      <img
                        src="/linkedin.svg"
                        alt="linkedin"
                        className="p-[1px] mx-4 rounded-lg lg:w-6 w-5 bg-text-modal hover:shadow-xl hover:opacity-70 hover:animate-text-shake"
                      ></img>
                    </a>

                    <a href="https://github.com/AridanyS" target="_blank">
                      <img
                        src="/github.svg"
                        alt="github"
                        className="mx-2 rounded-lg p-[1px] lg:w-6 w-5 bg-text-modal hover:shadow-xl hover:opacity-70 hover:animate-text-shake "
                      ></img>
                    </a>

                    <button
                      id="copyButton"
                      onClick={handleCopy}
                      target="_blank"
                    >
                      <img
                        src="/mail.svg"
                        alt="email"
                        className="mx-4 rounded-lg p-[1px] lg:w-6 w-5 bg-text-modal hover:shadow-xl hover:opacity-70 hover:animate-text-shake"
                      ></img>
                    </button>
                    {copied && (
                      <p className="fixed bottom-0 right-0 z-10 p-1 px-1 text-sm rounded-lg xl:bottom-10 xl:right-20 xl:text-xl text-text-modal-light bg-background-page opacity-90">
                        Mail copied to clipboard!
                      </p>
                    )}
                  </div>
                </div>
                <p className="flex text-[12px] lg:text-base font-bold">Thanks for reading!</p>
              </ModalFooter>
            </>
          }
        </ModalContent>
      </Modal>
    </>
  );
}
