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

        <p className="text-lg xl:text-4xl " id="AboutMe">
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
          <p className="flex items-center gap-3 xl:text-xl xl:mb-5">
            Contact
          </p>
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
        <ModalContent className="rounded-lg bg-background-Modal opacity-95 text-text-modal">
          {
            <>
              <ModalHeader className="flex flex-col gap-1 pt-3 pb-2 font-bold ">
                About me
                <div className="h-[0.5px] bg-text-modal" />
              </ModalHeader>

              <ModalBody className="">
                <p>
                  
                </p>
                <p>
                  
                </p>
                <p>
                  
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
