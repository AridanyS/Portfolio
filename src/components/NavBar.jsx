import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,

} from "@nextui-org/react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "About me", href: "#AboutMe" },
    { name: "Contact", href: "#Contact" },
    { name: "Projects", href: "#Projects" },
    { name: "Technologies", href: "#Technologies" },
  ];

  return (
    <>
      <Navbar className="fixed bg-text-modal " onMenuOpenChange={setIsMenuOpen}
        isBlurred="false"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=""
          />
        </NavbarContent>

        <NavbarMenu className=" bg-text-modal"
        >
          {menuItems.map((item, index) => (
            <NavbarMenuItem className="font-bold text-not-hard-pink" key={`${item.name}-${index}`}>
              <Link className="w-full" href={item.href} >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
