"use client";

import Link from "next/link";
import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Introduction = () => {
  let title = "< Gautier Gourdy />";
  let title2 = "Gourdy />";
  let chevron = "</>";

  return (
    <section className="h-screen">
      <div className="flex justify-center py-36">
        <Image
          src="/images/logo_angular_js.png"
          width={75}
          height={75}
          alt="Gautier Gourdy"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <div className=" flex flex-col text-center ">
          <h1 className="text-blue">{title}</h1>
          {/* <h2 className="text-blue">{title2}</h2> */}
          <h2 className="text-gray-clear pb-5">Junior Developer Web</h2>
        </div>
      </div>
      <div className="grid grid-cols-4 py-4">
        <div className=""></div>
        <div className="flex flex-row col-span-3">
          <div>
            <h1 className="text-right text-gray-dark text-5xl">10</h1>
          </div>
          <div>
            <p className="pl-2 text-gray-middle">
              SKILLS
              <br />
              MASTERED
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center pt-12">
        <div className=" grayfond rounded-lg shadow-md shadow-black text-xs mb-4">
          <div className="grid grid-cols-3">
            <div className="col-span-2 p-4 flex flex-col justify-center items-center">
              <h1 className="text-center text-gray-clear">
                Fullstack Developer
              </h1>
              <Link href={""} className="text-pink">
                Project
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg text-blue">{chevron}</p>
            </div>
          </div>
        </div>
        <div className="w-[215px] grayfond rounded-lg shadow-md shadow-black text-xs mb-4">
          <div className="grid grid-cols-3">
            <div className="col-span-2 p-4 flex flex-col text-gray-clear justify-center items-center">
              <h1 className="text-center">Freelancer</h1>
              <Link href={""} className="text-pink">
                Hire me !
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-lg text-blue">{"{}"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-20">
        <AnchorLink href="#about" offset={() => 100}>
          <FiArrowDown size={50} className="text-gray-clear" />
        </AnchorLink>
      </div>
    </section>
  );
};

export default Introduction;
