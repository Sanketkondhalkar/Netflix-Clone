import React from "react";
import "./Separator3.css";

const Separatore3 = () => {
  return (
    <div className="separator3">
      <div className="separator3_container">
        <div className="left_separator3">
          <h1>Enjoy on your Laptop.</h1>
          <h3>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h3>
        </div>
        <div className="right_separator3">
          {/* <img src="../../public/Images/3.png" alt="" /> */}
          <div className="videio_container">
            <video controls width="100%" autoPlay loop muted>
              <source
                src="../../public/videio/Untitled design.mp4"
                type="video/webm"
              />
              <source
                src="../../public/videio/Untitled design.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support videos.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Separatore3;
