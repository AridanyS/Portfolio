import React from "react";
import { useState } from "react";
import { Avatar } from "@nextui-org/avatar";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  //Button,
  useDisclosure,
} from "@nextui-org/react";

export default function AvatarPicture() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState("blur");

  const handleOpen = () => {
    setBackdrop("blur");
    onOpen();
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = 'aridany6@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
    });
  };

  return (
    <>
      <header className="font-bold mt-[35%] flex flex-col gap-12 items-center text-text-modal-light">
        <h1 id="" className="flex justify-center text-xl">
          Aridany de la Fe Sarmiento
        </h1>

        <div className="flex items-center justify-center ">
          <Avatar src="./images/foto.jfif" className="w-40 h-40" />
        </div>

        <p className="text-lg" id="AboutMe">
          Frontend Developer
        </p>

        <div
          className="font-bold text-text-modal-light"
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        >
          About me
        </div>

        <div
          id="Contact"
          className="flex flex-col items-center gap-4 font-bold "
          style={{ cursor: "pointer" }}
        >
          Contact
          <div className="flex">
          <a
            href="https://www.linkedin.com/in/aridany-de-la-fe-sarmiento-707438272/"
            target="_blank"
            className=""
          >
            <img src="./images/linkedin.svg"
            className="mx-4 rounded-lg bg-text-modal-light"></img>
          </a>

          <a
            href="https://github.com/AridanyS"
            target="_blank"
          >
            
            <img src="./images/github.svg"
            className="mx-4 rounded-lg bg-text-modal-light "></img>
          </a>

          <button 
            id="copyButton"

            onClick={handleCopy} 
            target="_blank"
          >
            
            <img src="./images/mail.svg"
            className="mx-4 rounded-lg bg-text-modal-light"></img>
          </button>
          {copied && <p className="absolute bottom-[20vw] text-green-500 ">Correo copiado al portapapeles!</p>}
          </div>
        </div>

      </header>
      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent className="rounded-lg bg-background-Modal opacity-95 text-text-modal">
          {
            <>
              <ModalHeader className="flex flex-col gap-1 pt-3 pb-2 font-bold ">
                About me
                <div className="h-[0.5px] bg-text-modal" />
              </ModalHeader>

              <ModalBody className="">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis.
                </p>
              </ModalBody>
              <ModalFooter>
                <p>Thanks for reading!</p>
              </ModalFooter>
            </>
          }
        </ModalContent>
      </Modal>
    </>
  );
}
