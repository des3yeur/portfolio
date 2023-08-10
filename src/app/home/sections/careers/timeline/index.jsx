"use client";
import React from "react";
import { Chrono } from "react-chrono";
import data from "./data.json";

const TimelineMobile = () => {
  return (
    <>
      <div className="flex lg:hidden">
        <div style={{height: "500px" }}>
          <Chrono
            hideControls={true}
            items={data}
            mode="VERTICAL"
            theme={{
              // primary: "red",
              secondary: "transparent",
              // cardBgColor: "yellow",
              // titleColor: "black",
              // titleColorActive: "red",
            }}
          />
        </div>
      </div>
      <div className="hidden lg:flex">
        <div style={{ width: "1500px", height: "950px" }}>
          <Chrono items={data} mode="VERTICAL_ALTERNATING" />
        </div>
      </div>
    </>
  );
};
export default TimelineMobile;
