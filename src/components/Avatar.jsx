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
      <header className="font-bold mt-[35%] flex flex-col gap-12 items-center text-text-modal-light">
        <h1 id="" className="flex justify-center text-xl">
          Aridany de la Fe Sarmiento
        </h1>

        <div className="flex items-center justify-center ">
          <Avatar src="/foto.jfif" className="w-40 h-40" />
        </div>

        <p className="text-lg" id="AboutMe">
          Frontend Developer
        </p>

        <button
          id="Contact"
          className="h-10 px-5 transition-colors duration-150 border-2 rounded-lg hover:animate-text-shake text-text-modal-light border-text-modal-light focus:shadow-outline hover:bg-text-modal-light hover:text-background-page"
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        >
          About me
        </button>

        <div
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
              <img
                src="/linkedin.svg"
                alt="linkedin"
                className="p-[1px] mx-4  rounded-lg bg-text-modal-light hover:shadow-xl hover:opacity-70 hover:animate-text-shake"
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
                className="mx-4  rounded-lg p-[1px] bg-text-modal-light hover:shadow-xl hover:opacity-70 hover:animate-text-shake"
              ></img>
            </button>
            {copied && (
              <p className="fixed bottom-0 right-0 z-10 p-1 px-1 text-sm rounded-lg text-text-modal-light bg-background-page opacity-90">
                Mail copied to clipboard!
              </p>
            )}
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
