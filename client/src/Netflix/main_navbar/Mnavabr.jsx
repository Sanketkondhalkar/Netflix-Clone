import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Mavbar.css";
import { ImSearch } from "react-icons/im";
import axios from "axios";

const Mnavabr = ({ getNavbardata, getlinkdata }) => {
  const [inputdata, setinputdata] = useState({
    search: "",
  });
  const [search, setserach] = useState([]);
  const getdata = (e) => {
    setinputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const loaddata = async () => {
    console.log(inputdata);
    const demo = await axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=a6cdd43496f682f8873f760d592ade39&language=en-US&query=${inputdata.search}&page=1&include_adult=false`
      )
      .then((resp) => {
        console.log(resp.data.results);
        return resp.data.results;
      })
      .catch((error) => {
        console.log(error.message);
      });
    setserach(demo);
  };
  const searchdata = () => {
    loaddata();
  };
  useEffect(() => {
    searchdata();
  }, [inputdata]);
  // console.log(inputdata);
  console.log(search);
  return (
    <div className="navbar_cntainer">
      <div className="left">
        <Link to="/">
          <img src="\public\logo\logo.png" alt="" />
        </Link>
      </div>
      <div className="right">
        <ul>
          <Link to="/treanding_movie">
            <li onClick={() => getNavbardata("movie")}> Trending</li>
          </Link>

          <Link to="/Tv/">
            <li onClick={() => getNavbardata("tv")}>Tv </li>
          </Link>
          <Link to="/movielist">
            <li onClick={() => getlinkdata("Movielist")}>Movielist </li>
          </Link>
          <Link to="/Webseries">
            <li onClick={() => getlinkdata("Webseries")}>Webseries </li>
          </Link>
        </ul>

        <div className="user">
          <div className="user_profile"></div>
          <span>sanket</span>
        </div>
        <div className="search_input">
          <input
            type="search"
            placeholder="enter the searchlist"
            name="search"
            onChange={getdata}
            value={inputdata.search}
          />
          <Link to="/treanding_movie" state={search}>
            <ImSearch size={22} color="white" onClick={searchdata} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mnavabr;
