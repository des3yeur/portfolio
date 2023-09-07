"use client";

import Image from "next/image";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

const HeaderDesktop = () => {
  return (
    <header className="w-full h-20 flex-row fond-gradient-reverse justify-center items-center font-consolasfontRegular">
      {/* <div className="h-16 w-11/12 flex flex-row justify-around items-center contain"> */}
      
        <div className="w-full flex grid-cols-5 text-gray-clear text-2xl justify-around py-2">

          <div>

         <AnchorLink href="#about" offset={() => 100}>
          <li className="py-4">
           About
          </li>
           </AnchorLink>
        </div>
        <div>
        <AnchorLink href="#skills" offset={() => 100}>
          <li className="py-4">
           Skills
          </li>
            </AnchorLink>
            </div>
            <div>
        <AnchorLink href="#projects" offset={() => 150}>
          <li className="py-4">
           Projects
          </li>
             </AnchorLink>
            </div>
            <div>
        <AnchorLink href="#career" offset={() => 150}>
          <li className="py-4">
            Career
          </li>
              </AnchorLink>
              </div>
              <div>
        <AnchorLink href="#contact" offset={() => 150}>
          <li className="py-4">
           Contact
          </li>
               </AnchorLink>
               </div>
      </div>
    </header>
  );
};

export default HeaderDesktop;