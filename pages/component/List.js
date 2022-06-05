import React, { useState } from "react";
import NavbarElto from "./NavbarElto";

const NavEltos = () => {
  const [navlEltos, setNavEltos] = useState([
    {
      name: "Home",
      href:"/",
    },
    {
      name: "Catalogo",
      href:"/catalogo"
    },
  ]);

  return (
    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-1">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">  
        {navlEltos.map((item,index) => {
         return (
            <NavbarElto
              key={item.index}
              href={item.href}>{item.name}</NavbarElto>
          );
        })}
      </ul>
    </div>
  );
};

export default NavEltos;