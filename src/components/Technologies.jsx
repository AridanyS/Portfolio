// eslint-disable-next-line no-unused-vars
import React from "react";
//import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Technologies() {
  return (
    <>
      <div id="Technologies" className=""></div>
      <div className="flex justify-center mt-[25vh] mb-[20vh]">
        <div
          className=" w-[80%] xl:w-[40%] h-[75vh] 
    font-bold text-text-modal-light rounded-lg
    bg-background-page border-8 border-background-page"
        >
          <section className="flex items-center content-center justify-between p-4 rounded-sm xl:text-3xl border-background-DarkBrown">
            Technologies
            <section className="flex gap-2 xl:gap-4 justify-evenly">
              <section className="w-2 h-2 bg-red-600 rounded-full xl:h-3 xl:w-3 "></section>
              <section className="w-2 h-2 bg-yellow-400 rounded-full xl:h-3 xl:w-3 "></section>
              <section className="w-2 h-2 bg-green-400 rounded-full xl:h-3 xl:w-3 "></section>
            </section>
          </section>
          <article
            id=""
            className=" w-[100%] xl:w-[80%] mx-auto max-sm:my-15 h-[60vh] 
       grid items-center grid-cols-3 grid-rows-3 
      font-bold text-text-modal-light justify-items-center
      rounded-lg text-sm xl:text-xl "
          >
            <section
              id=""
              className="flex flex-col items-center w-12 h-12 px-2 py-2 transition-transform duration-300 rounded-xl xl:w-24 xl:h-24 hover:scale-125"
            >
              <img src="./html5.svg" alt="html" className="w-12 h-12 xl:w-24 xl:h-24 "></img>
              <p className="xl:pt-2">HTML</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center w-12 h-12 px-2 py-2 transition-transform duration-300 rounded-xl xl:w-24 xl:h-24 hover:scale-125"
            >
              <img src="/css.svg" alt="css" className="w-12 h-12 xl:w-24 xl:h-24 "></img>
              <p className="xl:pt-2">CSS</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center w-12 h-12 px-2 py-2 transition-transform duration-300 rounded-xl xl:w-24 xl:h-24 hover:scale-125"
            >
              <img
                src="javascript.svg"
                alt="javascript"
                className="w-12 h-12 xl:w-24 xl:h-24 "
              ></img>
              <p className="xl:pt-2">JavaScript</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center w-12 h-12 px-2 py-2 transition-transform duration-300 rounded-xl xl:w-24 xl:h-24 hover:scale-125"
            >
              <img src="/react.svg" alt="react" className="w-12 h-12 xl:w-24 xl:h-24 "></img>
              <p className="xl:pt-2">React</p>
            </section>
            <section
              id=""
              className="flex flex-col items-center px-2 py-2 transition-transform duration-300 w-14 h-14 rounded-xl xl:w-24 xl:h-24 hover:scale-125"
            >
              <img
                src="/tailwindcss.svg"
                alt="tailwindcss"
                className="w-12 h-12 xl:w-24 xl:h-24 "
              ></img>
              <p className="pt-2 xl:pt-2">TailwindCSS</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center w-12 h-12 px-2 py-2 transition-transform duration-300 rounded-xl xl:w-24 xl:h-24 hover:scale-125"
            >
              <img src="/sass.svg" alt="sass" className="w-12 h-12 xl:w-24 xl:h-24 "></img>
              <p className="xl:pt-2">Sass</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center w-12 h-12 px-2 py-2 transition-transform duration-300 rounded-xl xl:w-24 xl:h-24 hover:scale-125"
            >
              <img src="/vitejs.svg" alt="vite" className="w-12 h-12 xl:w-24 xl:h-24 "></img>
              <p className="xl:pt-2">Vite</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center w-12 h-12 px-2 py-2 transition-transform duration-300 rounded-xl xl:w-24 xl:h-24 hover:scale-125"
            >
              <img src="/nodejs.svg" alt="sass" className="w-12 h-12 xl:w-24 xl:h-24 "></img>
              <p className="xl:pt-2">Node.js</p>
            </section>

            <section
              id=""
              className="flex flex-col items-center w-16 h-16 px-2 py-2 transition-transform duration-300 rounded-xl xl:w-24 xl:h-24 hover:scale-125"
            >
              <img
                src="/terminal.svg"
                alt="terminal"
                className="flex flex-col items-center w-12 h-12 px-2 py-2 transition-transform duration-300 rounded-xl xl:w-24 xl:h-24 hover:scale-125"
              ></img>
              <p className="xl:pt-2">Terminal</p>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
