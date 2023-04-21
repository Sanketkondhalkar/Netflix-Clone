import React from "react";
import Navbar from "../Navbar/Navbar";
import Mainpage from "../Netflix/Mainpage/Mainpage";
import "./Home.css";
import Separatore1 from "./separator1/Separatore1";
import Separatore2 from "./separator2/separator2";
import Separatore3 from "./separator3/Separatore3";
import Separatore4 from "./separator4/separator4";

const Home = ({ isauthenticated }) => {
  console.log(isauthenticated);
  return (
    <>
      <div className="home_container">
        {isauthenticated ? "" : <Navbar />}
        <div className="home_main_div">
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h4>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h4>
          <button className="home_button">Get started </button>
        </div>
      </div>
      <hr />
      <Separatore1 />
      <hr />
      <Separatore2 />
      <hr></hr>
      <Separatore3 />
      <hr></hr>
      <Separatore4 />
    </>
  );
};

export default Home;
