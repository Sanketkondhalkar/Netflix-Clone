import React, { useState } from "react";
import Trendingslider from "./TrandingSlider/Trendingslider";
import "./Trending.css";

const Trending = () => {
  const [flag, setflag] = useState(true);
  const setflagdata = () => {
    setflag(true);
  };
  const setflagdatachange = () => {
    setflag(false);
  };

  return (
    <div className="trending_page">
      <div className="button_aside">
        <h1>Trending</h1>
        <div className="container">
          <div
            className="left"
            style={{
              backgroundColor: flag ? "red" : "",
              border: flag ? "red" : "",
            }}
            onClick={setflagdata}
          >
            Day
          </div>
          <div
            className="right"
            style={{
              backgroundColor: flag ? "" : "red",
              border: flag ? "red" : "",
            }}
            onClick={setflagdatachange}
          >
            Week
          </div>
        </div>
      </div>
      <div className="slider_box">
        <Trendingslider flag={flag} />
      </div>
    </div>
  );
};

export default Trending;
