import React, { useState } from "react";
import "./Top.css";
import Topslider from "./Popularslider/Topslider";

const Top = () => {
  return (
    <div className="trending_page">
      <div className="button_aside">
        <h1>Top Movie</h1>
      </div>
      <div className="slider_box">
        <Topslider />
      </div>
    </div>
  );
};

export default Top;
