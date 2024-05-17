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
            className="h-full sm:hidden"
          />
        </NavbarContent>

        <NavbarMenu className="opacity-95 bg-text-modal"
        >
          {menuItems.map((item, index) => (
            <NavbarMenuItem className="w-5/12 font-bold rounded text-background-page hover:bg-grey-semidarker" key={`${item.name}-${index}`}>
              <Link className="" href={item.href} >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
