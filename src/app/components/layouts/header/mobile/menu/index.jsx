"use client";
import { styles } from "./styles";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";
import {BsDiscord} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsMailbox2} from "react-icons/bs"
import {BsFillTelephoneFill} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import AnchorLink from "react-anchor-link-smooth-scroll";

const MenuNav = () => {
  return (
    <Menu styles={styles}>
      <div className="w-full flex justify-center py-14">
        <a href={"http://localhost:3000/"}>
          <Image
            src="/images/photo_gautier.jpg"
            width={150}
            height={150}
            alt="Gautier Gourdy"
            className="rounded-full"
          />
        </a>
      </div>
      <div className="py-4 font-plusjakartasansRegular text-gray-clear">
        <ul>
           <AnchorLink href="#introduction" offset={() => 100}>
          <li className="py-4 ">
            HomePage
          </li>
           </AnchorLink>
           <AnchorLink href="#about" offset={() => 100}>
          <li className="py-4">
           About
          </li>
           </AnchorLink>
            <AnchorLink href="#skills" offset={() => 100}>
          <li className="py-4">
           Skills
          </li>
            </AnchorLink>
             <AnchorLink href="#projects" offset={() => 150}>
          <li className="py-4">
           Projects
          </li>
             </AnchorLink>
              <AnchorLink href="#career" offset={() => 150}>
          <li className="py-4">
            Career
          </li>
              </AnchorLink>
               <AnchorLink href="#contact" offset={() => 150}>
          <li className="py-4">
           Contact
          </li>
               </AnchorLink>
        </ul>
      </div>
      <div className="grid grid-cols-6 pt-24 font-plusjakartasansRegular text-gray-clear">
        <div className="flex justify-center">
         <Link href="https://discord.com/users/0xdes3yeur" >
              <BsDiscord size={30}/>
               </Link>
        </div>
        <div className="flex justify-center">
          <Link href="https://github.com/des3yeur" >
              <BsGithub size={30}/>
             </Link>
        </div>
        <div className="flex justify-center">
         <Link href="https://github.com/des3yeur" >
              <BsMailbox2 size={30}/>
              </Link>
        </div>
        <div className="flex justify-center">
           <Link href="https://github.com/des3yeur" >
              <BsFillTelephoneFill size={30}/>
              </Link>
        </div>
        <div className="flex justify-center">
         <Link href="https://twitter.com/0xdes3yeur" >
              <BsTwitter size={30}/>
              </Link>
        </div>
        <div className="flex justify-center">
          <Link href="https://www.linkedin.com/in/gautier-gourdy/" >
              <BsLinkedin size={30}/>
              </Link>
        </div>
      </div>
      <div className="flex justify-center text-gray-clear">
        <p>Copyright</p>
      </div>
    </Menu>
  );
};

export default MenuNav;
