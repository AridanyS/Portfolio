// eslint-disable-next-line no-unused-vars
import React from "react";
//import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Technologies() {
  return (
    <>
      <div id="Technologies" className=""></div>
      <div className="flex justify-center mt-[15vh] mb-[20vh]">
        <div
          className=" w-[80%] xl:w-[40%]  h-[75vh] 
    font-bold text-text-modal-light rounded-lg
    bg-background-page border-8 border-background-page"
        >
          <section className="flex items-center content-center justify-between p-4 rounded-sm xl:text-2xl border-background-DarkBrown">
            Technologies
            <section className="flex gap-2 justify-evenly">
              <section className="bg-red-600 rounded-full xl:h-3 xl:w-3 "></section>
              <section className="bg-yellow-400 rounded-full xl:h-3 xl:w-3 "></section>
              <section className="bg-green-400 rounded-full xl:h-3 xl:w-3 "></section>
            </section>
          </section>
          <article
            id=""
            className=" w-[80%] mx-auto my-4 max-sm:my-15 h-[60vh] 
       grid items-center grid-cols-3 grid-rows-3 
      font-bold text-text-modal-light justify-items-center
      rounded-lg text-sm "
          >
            <section
              id=""
              className="flex flex-col items-center px-2 py-2 rounded-xl hover:bg-text-modal-darker"
            >
              <img src="./html5.svg" alt="html" className="w-12 h-12 xl:w-24 xl:h-24 "></img>
              <p className="">HTML</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center px-2 py-2 rounded-xl hover:bg-text-modal-darker"
            >
              <img src="/css.svg" alt="css" className="w-12 h-12 xl:w-24 xl:h-24 "></img>
              <p className="">CSS</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center px-2 py-2 rounded-xl hover:bg-text-modal-darker"
            >
              <img
                src="javascript.svg"
                alt="javascript"
                className="w-12 h-12 xl:w-24 xl:h-24 "
              ></img>
              <p className="">JavaScript</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center px-2 py-2 rounded-xl hover:bg-text-modal-darker"
            >
              <img src="/react.svg" alt="react" className="w-12 h-12 xl:w-24 xl:h-24 "></img>
              <p className="">React</p>
            </section>
            <section
              id=""
              className="flex flex-col items-center px-2 py-2 rounded-xl hover:bg-text-modal-darker"
            >
              <img
                src="/tailwindcss.svg"
                alt="tailwindcss"
                className="w-12 h-12 xl:w-24 xl:h-24 "
              ></img>
              <p className="">TailwindCSS</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center px-2 py-2 rounded-xl hover:bg-text-modal-darker"
            >
              <img src="/sass.svg" alt="sass" className="w-12 h-12 xl:w-24 xl:h-24 "></img>
              <p className="">Sass</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center px-2 py-2 rounded-xl hover:bg-text-modal-darker"
            >
              <img src="/vitejs.svg" alt="vite" className="w-12 h-12 xl:w-24 xl:h-24 "></img>
              <p className="">Vite</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center px-2 py-2 rounded-xl hover:bg-text-modal-darker"
            >
              <img src="/nodejs.svg" alt="sass" className="w-12 h-12 xl:w-24 xl:h-24 "></img>
              <p className="">Node.js</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center px-2 py-2 rounded-xl hover:bg-text-modal-darker"
            >
              <img
                src="/terminal.svg"
                alt="terminal"
                className="w-12 h-12 xl:w-24 xl:h-24 "
              ></img>
              <p className="">Terminal</p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
