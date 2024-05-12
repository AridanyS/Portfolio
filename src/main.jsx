import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import AvatarPicture from "./components/Avatar.jsx";
import Technology from "./components/Technologies.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <AvatarPicture />
      <Technology />
    </NextUIProvider>
  </React.StrictMode>
);
