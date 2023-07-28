"use client";
import Link from "next/link";

const FooterMobile = () => (
  <div className="bg-gray-800 text-xs te py-1 flex flex-col-3 items-center justify-center">
    <Link href={""}>
      <p className=" hover:text-black ">©2023 Copyright.</p>
    </Link>
    <Link href={""}>
      <p className=" hover:text-black pl-1">Tous droits réservés.</p>
    </Link>
    <Link href={""}>
      <p className=" hover:text-black pl-1">Mentions légales.</p>
    </Link>
  </div>
);

export default FooterMobile; 