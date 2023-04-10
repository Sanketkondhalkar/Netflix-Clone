import React from "react";
import "./Mainpage.css";
import Popular from "./Popular/Popular";
import Top from "./Top/Top";
import Trending from "./Trending/Trending";

const Mainpage = () => {
  const data = [
    "https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/16x9-1674813309656.jpg",
    "https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg",
  ];
  const randomindex = () => {
    const index = Math.floor(Math.random() * data.length);
    return index;
  };
  return (
    <>
      <div className="Mainpage_home">
        <img src={data[randomindex()]} alt="" />
      </div>
      <Trending />
      <Top />
      <Popular />
    </>
  );
};

export default Mainpage;
