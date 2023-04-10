import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Topslider.css";

const Topslider = () => {
  const [top, settop] = useState([]);
  const loaddata = async () => {
    const demo = await axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=a6cdd43496f682f8873f760d592ade39&language=en-US&page=1"
      )
      .then((resp) => resp.data)
      .catch((error) => {
        console.log(error.message);
      });
    settop(demo?.results);
  };
  useEffect(() => {
  
    loaddata();
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    pauseOnHover: false,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          {top?.map((item) => {
            return (
              <div key={item?.id} className="box">
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
        </Slider>
      </div>
    </>
  );
};

export default Topslider;
