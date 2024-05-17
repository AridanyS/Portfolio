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
      <Navbar
        className="fixed bg-fondo "
        onMenuOpenChange={setIsMenuOpen}
        isBlurred="false"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="h-full sm:hidden"
          />
        </NavbarContent>

        <NavbarMenu className="opacity-95 bg-fondo">
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              className="w-auto font-bold rounded text-background-DarkBrown "
              key={`${item.name}-${index}`}
            >
              <Link className="" href={item.href} underline="hover">
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
