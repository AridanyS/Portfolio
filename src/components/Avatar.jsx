// eslint-disable-next-line no-unused-vars
import React from "react";
import { Avatar } from "@nextui-org/avatar";

export default function AvatarPicture() {
    return (
        <div className="flex items-center justify-center w-screen ">
            <Avatar src="./images/foto.jfif" className="w-24 h-24"/>
            <div className="border border-slate-500 border-1 ">
                Sobre mí
            </div>
        </div>
    );
}
