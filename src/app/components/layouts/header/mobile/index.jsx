"use client";

import MenuNav from "./menu";
import { useState } from "react";
import Modal from "./modal";
import { useContext } from "react";
import { ModalContext } from "@/app/components/context/modalProvider";

const HeaderMobile = () => {
  const { showModal, setShowModal } = useContext(ModalContext);

  return (
    <header className="fixed z-50 top-0 fond-gradient-reverse w-full h-24 flex lg:hidden">
      <nav className="w-full grid grid-cols-3">
        <div>
          <MenuNav />
        </div>
        <div className="flex flex-col justify-center items-center">
          <a href="http://localhost:3000/">
            <h1 className="text-gray-middle text-lg">GAUTIER</h1>
            <h1 className="text-gray-clear text-lg">GOURDY</h1>
          </a>
        </div>
        <button className="contain border-[1px] hover:transition hover:ease-out hover:duration-700  hover:bg-white active:bg-slate-500 mx-4 my-8 font-plusjakartasansRegular text-xs font-bold text-gray-clear text-border" type="button" onClick={() => setShowModal(true)}>
          Contact me
        </button>
       
      </nav>
      {showModal === true ? Modal() : null}
    </header>
  );
};

export default HeaderMobile;
