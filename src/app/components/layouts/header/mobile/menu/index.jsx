"use client";
import { styles } from "./styles";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";

const MenuNav = () => {
  return (
    <Menu styles={styles}>
      <div className="w-full flex justify-center py-20">
        <a href={"http://localhost:3000/"}>
          <Image
            src="/images/logo_angular_js.png"
            width={75}
            height={75}
            alt="Gautier Gourdy"
            className="rounded-full"
          />
        </a>
      </div>
      <div className="py-10">
        <ul>
          <li>
            <a href={"http://localhost:3000/"}>Home</a>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/skills"}>Skills</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/career"}>Career</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-3 pt-40">
        <div className="flex justify-center">
          <FiArrowDown />
        </div>
        <div className="flex justify-center">
          <FiArrowDown />
        </div>
        <div className="flex justify-center">
          <FiArrowDown />
        </div>
      </div>
      <div className="flex justify-center">
        <p>Copyright</p>
      </div>
    </Menu>
  );
};

export default MenuNav;
