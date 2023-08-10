"use client";
import ScrollToTop from "react-scroll-to-top";
import { AiOutlineArrowUp } from "react-icons/ai";

const ReturnToTop = () => {
  return (
    <ScrollToTop
      smooth
      component={
        <div className="flex justify-center items-center w-full h-full">
          <AiOutlineArrowUp />
        </div>
      }
    />
  );
};

export default ReturnToTop;
