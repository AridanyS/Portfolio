import React from "react";
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

  return (
    <>
      <header>
        <div className="flex items-center justify-center w-screen ">
          <Avatar src="./images/foto.jfif" className="w-24 h-24" />

          <div
            className="border border-slate-500"
            onClick={handleOpen}
            style={{ cursor: "pointer" }}
          >
            About me
          </div>
        </div>
      </header>

      <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
        <ModalContent className="rounded-lg bg-background-Modal opacity-95 text-text-modal">
          {(//Button) => (
            <>
              <ModalHeader className="flex flex-col gap-1 pt-3 pb-2 font-bold ">
                About me
                <div className="h-[0.5px] bg-text-modal"/>
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
                <p>
                Thanks for reading!
                </p>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
