import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "./Movie.css";

const Movie = ({ globaldata }) => {
  return (
    <div className="main_movie">
      <div className="movie_container">
        {globaldata.map((item) => {
          return (
            <div className="demo" key={item.id}>
              <Link to={`/singlecontent/${item.id}`}>
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                  alt=""
                />
                <p>{item?.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
