"use client";
import React from "react";
import { Chrono } from "react-chrono";
import data from "./data.json";

const TimelineMobile = () => {
  return (
    <>
      <div className="flex lg:hidden ">
        <div style={{height: "500px" }}>
          <Chrono
            hideControls={true}
            items={data}
            mode="VERTICAL"
            theme={{
              primary: "#fcddec",
              secondary: "transparent",
              cardBgColor: "transparent",
              titleColor: "#dddddd",
              // titleColorActive: "red",
            }}
          />
        </div>
      </div>
      <div className="hidden lg:flex">
        <div style={{ width: "1500px", height: "950px" }}>
          <Chrono items={data} mode="VERTICAL_ALTERNATING" theme={{
              primary: "#fcddec",
              secondary: "transparent",
              cardBgColor: "transparent",
              titleColor: "#dddddd",
              // titleColorActive: "red",
            }}/>
        </div>
      </div>
    </>
  );
};
export default TimelineMobile;
