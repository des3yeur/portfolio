import React from "react";
import { Chrono } from "react-chrono";

const TimelineMobile = () => {
    const items = [{
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: ""
        }
      }
    },];

    return (
    <div style={{ width: '400px', height: '500px' }}>
  <Chrono items={items} mode="VERTICAL" />
</div>
    )
  }
  export default TimelineMobile 