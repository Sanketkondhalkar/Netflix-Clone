import React from "react";
import "./Separator.css";

const Separatore1 = () => {
  return (
    <div className="separator1">
      <div className="separator1_container">
        <div className="left_separator1">
          <h1>Enjoy on your TV.</h1>
          <h3>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h3>
        </div>
        <div className="right_separator1">
          {/* <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          /> */}
          <div className="videio_container">
            <video controls width="100%" height="208px" autoPlay loop muted>
              <source src="../../public/videio/1.mp4" type="video/webm" />
              <source src="../../public/videio/1.mp4" type="video/mp4" />
              Sorry, your browser doesn't support videos.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Separatore1;
