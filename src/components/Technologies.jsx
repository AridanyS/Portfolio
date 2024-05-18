// eslint-disable-next-line no-unused-vars
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

export default function Technologies() {
  /*const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
*/

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
