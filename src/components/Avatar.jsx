// eslint-disable-next-line no-unused-vars
import React from "react";
import { Avatar } from "@nextui-org/avatar";

export default function AvatarPicture() {
    return (
        <div className="flex items-center gap-4">
            <Avatar isBordered radius="full" src="./images/foto.jfif" />
            <Avatar
                isBordered
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                
            />
            <Avatar
                isBordered
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
            <Avatar
                isBordered
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
            />
            <Avatar
                isBordered
                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            />
            <Avatar
                isBordered
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            />
              <Avatar name="Junior" />
        </div>
    );
}
