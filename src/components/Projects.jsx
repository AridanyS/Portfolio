// eslint-disable-next-line no-unused-vars
import React from "react";

export default function ProjectsGrid() {
  return (
    <>
      <div className="w-full">
        <div className="grid w-full grid-cols-1 justify-items-center">
          Projects
          <img
            src="../images/Drag-Drop.png"
            alt="web_drag-drop"
            className="w-3/5"
          ></img>
          <img
            src="../images/chiwawa.png"
            alt="restaurante_chiwawa"
            className="w-3/5"
          ></img>
          <img src="../images/rocket.png" 
            alt="rocket" 
            className="w-3/5"></img>
          <img src="../images/airbnb.png" alt="airbnb" className="w-3/5"></img>
        </div>
      </div>
    </>
  );
}
