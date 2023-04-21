import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movielist.css";

const Movielist = ({ listdata }) => {
  const [initial, setinitial] = useState(8);
  const [initial1, setinitial1] = useState(5);

  const [data, setdata] = useState([]);
  const getdata = (item) => {
    setinitial(item);
    setinitial1(item);
  };
  const loaddata2 = async () => {
    const demo = await axios
      .get(
        listdata === "Movielist"
          ? `https://api.themoviedb.org/3/trending/movie/day?api_key=a6cdd43496f682f8873f760d592ade39&page=${initial}`
          : `https://api.themoviedb.org/3/trending/tv/week?api_key=a6cdd43496f682f8873f760d592ade39&page=${initial1}`
      )
      .then((resp) => resp.data)
      .catch((error) => {
        console.log(error.message);
      });
    setdata(demo?.results);
  };
  console.log(data);
  const buttondata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  useEffect(() => {
    loaddata2();
  const [initial1, setinitial1] = useState(5);
  }, [initial,initial1]);

  return (
    <div className="movilist_container">
      <div className="flex">
        {data?.map((item) => {
          return (
            <div className="demo" key={item?.id}>
              <Link to={`/singlecontent/${item?.id}`}>
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item?.poster_path}`}
                  alt=""
                />

                <p>{item?.title}</p>
                <p>{item?.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        {buttondata.map((item, index) => {
          return (
            <button key={index} onClick={() => getdata(item)}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Movielist;
