"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Aos = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);
};

export default Aos;
