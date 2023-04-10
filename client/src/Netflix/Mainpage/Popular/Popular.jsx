import React, { useState } from "react";
import "./Popular.css";
import Popularslider from "./Popularslider/Popularslider";

const Popular = () => {
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
        <h1>What's Popular</h1>
        <div className="container">
          <div
            className="left"
            style={{
              backgroundColor: flag ? "red" : "",
              border: flag ? "red" : "",
            }}
            onClick={setflagdata}
          >
            Web series
          </div>
          <div
            className="right"
            style={{
              backgroundColor: flag ? "" : "red",
              border: flag ? "red" : "",
            }}
            onClick={setflagdatachange}
          >
            Tv
          </div>
        </div>
      </div>
      <div className="slider_box">
        <Popularslider flag={flag} />
      </div>
    </div>
  );
};

export default Popular;
