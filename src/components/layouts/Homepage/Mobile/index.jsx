"use client";
import Image from "next/image";
import Carousel1 from "@/components/tools/carousel1";
import Link from "next/link";
import Carousel2 from "@/components/tools/carousel2";
import Carousel3 from "@/components/tools/carousel3";
import ScrollButton from "@/components/tools/scrollbutton/gtotopbutton";
import { Chrono } from "react-chrono";
import TimelineMobile from "@/components/tools/timeline";

const HomePageMobile = () => {
  let title = "<Gautier Gourdy />";
  return (
    <div className="bg-red-500">
      <div className="grid grid-row-3">
        <div className=" flex flex-col text-center">
          <h1 className="">Hello, i am </h1>
          <h2>{title}</h2>
          <h3>Junior Fullstack Developer</h3>
          <h4>1</h4>
          <h5>SKILLS MASTERED</h5>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/fezfezf.jpg"
            width={50}
            height={25}
            alt="Maxence Dupre"
          />
        </div>
        <div>
          <div className="bg-gray-500 flex flex-col text-center">
            <h1>Fullstack Developer</h1>
            <Link href={""}>
              <p>Projects</p>
            </Link>
            <div className="bg-gray-500 flex flex-col text-center">
              <h1>Fullstack Developer</h1>
              <Link href={""}>
                <p>Projects</p>
              </Link>
            </div>
            <h1>About me</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
              nobis temporibus pariatur accusantium molestiae, optio officiis
              nam veniam blanditiis vero animi nihil fuga et laudantium
              molestias error mollitia saepe nemo?
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          Skills()
          <div>
            <Carousel1 />
          </div>
          <div>
            <Carousel2 />
          </div>
        </div>
      </div>
      <div>
        <h1>Project()</h1>
        <div>
          <Carousel3 />
        </div>
      </div>
      <div>
        <h1>Career()</h1>
        
      </div>
      <div>
        <h1>lorem</h1>
        <TimelineMobile/>
      </div>
      <div>
        <div>Contact()</div>
        <div className="grid grid-cols-5">
          <Image
            src="/images/Gmail-Logo.png"
            width={100}
            height={10}
            alt="logo gmail"
          />
          <Image
            src="/images/Logo_of_Twitter.svg.png"
            width={35}
            height={35}
            alt="Logo twitter"
          />
          <Image
            src="/images/LinkedIn_icon.svg.png"
            width={52}
            height={30}
            alt="logo linkedin"
          />
          <Image
            src="/images/Discord_Logo_sans_texte.svg.png"
            width={50}
            height={25}
            alt="logo discord"
          />
          <Image
            src="/images/25231 (1).png"
            width={50}
            height={25}
            alt="logo github"
          />
        </div>
      </div>
      <ScrollButton/>
    </div>
  );
};

export default HomePageMobile;
