import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import AvatarPicture from "./components/Avatar.jsx";
import ProjectsGrid from "./components/Projects.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <AvatarPicture />
      <ProjectsGrid />
    </NextUIProvider>
  </React.StrictMode>
);
