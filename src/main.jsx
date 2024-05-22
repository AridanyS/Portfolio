import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./components/NavBar.jsx";
import AvatarPicture from "./components/Avatar.jsx";
import ProjectsGrid from "./components/Projects.jsx";
import Technologies from "./components/Technologies.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <NavBar/>
      <AvatarPicture />
      <ProjectsGrid />
      <Technologies/>
    </NextUIProvider>
  </React.StrictMode>
);
