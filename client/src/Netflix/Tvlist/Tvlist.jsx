import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cooman from "../commancomponent/Cooman";
import "./Tvlist.css";

const Tvlist = () => {
  const [initial, setinitial] = useState(3);
  const [data, setdata] = useState([]);
  const getdata = (item) => {
    setinitial(item);
  };

  const loaddata2 = async () => {
    const demo = await axios
      .get(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=a6cdd43496f682f8873f760d592ade39&page=${initial}`
      )
      .then((resp) => resp.data)
      .catch((error) => {
        console.log(error.message);
      });
    setdata(demo?.results);
  };
  const buttondata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(() => {
    loaddata2();
  }, [initial]);
  // https://api.themoviedb.org/3/trending/person/day?api_key=a6cdd43496f682f8873f760d592ade39&page=1

  return <Cooman data={data} buttondata={buttondata} getdata={getdata} />;
};

export default Tvlist;
