import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Trensingslider.css";

const Trendingslider = ({ flag }) => {
  const [treandingdata, settreandingdata] = useState([]);
  const [treandingweek, settreandingweek] = useState([]);
  const loaddata1 = async () => {
    const demo = await axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=a6cdd43496f682f8873f760d592ade39"
      )
      .then((resp) => resp.data)
      .catch((error) => {
        console.log(error.message);
      });
    settreandingdata(demo?.results);
  };
  const loaddata2 = async () => {
    const demo = await axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=a6cdd43496f682f8873f760d592ade39"
      )
      .then((resp) => resp.data)
      .catch((error) => {
        console.log(error.message);
      });
    settreandingweek(demo?.results);
  };
  useEffect(() => {
    loaddata2();
    loaddata1();
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
      {flag ? (
        <div>
          <Slider {...settings}>
            {treandingdata?.map((item) => {
              return (
                <div key={item?.id} className="box">
                  <Link to={`/singlecontent/${item.id}`}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                      alt=""
                    />

                    <p>{item?.original_title}</p>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      ) : (
        <div>
          <Slider {...settings}>
            {treandingweek?.map((item) => {
              return (
                <div key={item?.id} className="box">
                  <Link to={`/singlecontent/${item.id}`}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                      alt=""
                    />
                    <p>{item?.original_title}</p>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
};

export default Trendingslider;
