// eslint-disable-next-line no-unused-vars
import React from "react";
//import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Technologies() {
  return (
    <>
    <div className="relative left-[10%] w-[80%] top-[300px]
    font-bold text-text-modal-light rounded-lg
    bg-background-page border-8 border-background-page">
      Technologies
      
    <article
      id="Technologies"
      className=" w-[80%] mx-auto my-4 h-[auto] 
      gap-6 grid items-center grid-cols-3 grid-rows-3 
      font-bold text-text-modal-light justify-items-center
      rounded-lg text-sm "
    >
      <section id="" className="flex flex-col items-center">
        <img
          src="../images/html5.svg"
          alt="html"
          className="w-12 h-12 "
        ></img>
        <p className="">HTML</p>
      </section>

      <section id="" className="flex flex-col items-center">
        <img src="../images/css.svg" 
        alt="css" 
        className="w-12 h-12 "></img>
        <p className="">CSS</p>
      </section>

      <section id="" className="flex flex-col items-center">
        <img
          src="../images/javascript.svg"
          alt="javascript"
          className="w-12 h-12 "
        ></img>
        <p className="">JavaScript</p>
      </section>

      <section id="" className="flex flex-col items-center">
        <img
          src="../images/react.svg"
          alt="react"
          className="w-12 h-12 "
        ></img>
        <p className="">React</p>
      </section>
      <section id="" className="flex flex-col items-center">
        <img
          src="../images/tailwindcss.svg"
          alt="tailwindcss"
          className="w-12 h-12 "
        ></img>
        <p className="">TailwindCSS</p>
      </section>

      <section id="" className="flex flex-col items-center">
        <img src="../images/sass.svg" 
        alt="sass" 
        className="w-12 h-12 ">
        </img>
        <p className="">Sass</p>
      </section>

      <section id="" className="flex flex-col items-center">
        <img
          src="../images/vitejs.svg"
          alt="vite"
          className="w-12 h-12 "
        ></img>
        <p className="">Vite</p>
      </section>

      <section id="" className="flex flex-col items-center">
        <img
          src="../images/nodejs.svg"
          alt="sass"
          className="w-12 h-12 "
        ></img>
        <p className="">Node.js</p>
      </section>

      <section id="" className="flex flex-col items-center">
        <img
          src="../images/terminal.svg"
          alt="terminal"
          className="w-12 h-12 "
        ></img>
        <p className="">Terminal</p>
      </section>
    </article>
    </div>
    
    </>
  );
}

/*const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  return (
  
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
        <section id="Technologies" className="flex items-center gap-8 p-4 ">
        <img src="../images/css.svg" alt="css" 
        className="w-1/6 h-1/6 "></img>
        <p className="">
            css Es una herramienta de estiado web y probamos lo que ocurre cuando
            hay mucho contenido en el accordion
        </p>
        </section>
      </AccordionItem>

      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
      <section id="Technologies" className="flex items-center gap-8 p-4 ">
        <img src="../images/css.svg" alt="css" 
        className="w-1/6 h-1/6 "></img>
        <p className="">
            css Es una herramienta de estiado web y probamos lo que ocurre cuando
            hay mucho contenido en el accordion
        </p>
        </section>
      </AccordionItem>

      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
      <section id="Technologies" className="flex items-center gap-8 p-4 ">
        <img src="../images/css.svg" alt="css" 
        className="w-1/6 h-1/6 "></img>
        <p className="">
            css Es una herramienta de estiado web y probamos lo que ocurre cuando
            hay mucho contenido en el accordion
        </p>
        </section>
      </AccordionItem>
    </Accordion>
  );
}
*/
