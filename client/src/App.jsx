import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login page/Login/Login";
import Register from "./Login page/Register/Register";
import Mnavabr from "./Netflix/main_navbar/Mnavabr";
import Singlecontent from "./Netflix/Singlecontent/Singlecontent";
import Movie from "./Netflix/Movie/Movie";
import Movielist from "./Netflix/Movielist/Movielist";
import axios from "axios";
import { useSelector } from "react-redux";
import Mainpage from "./Netflix/Mainpage/Mainpage";

function App() {
  const { register, status } = useSelector((state) => state);
  console.log(status);
  const [isauthenticated, setisauthenticated] = useState(status);
  const [navdata, setnavedata] = useState("movie");
  const [listdata, setlistdata] = useState("");
  const [globaldata, setglobaldata] = useState([]);

  console.log(isauthenticated);

  useEffect(() => {
    const loaddata = async () => {
      const demo = await axios
        .get(
          ` https://api.themoviedb.org/3/trending/${navdata}/day?api_key=a6cdd43496f682f8873f760d592ade39&page=1`
        )
        .then((resp) => resp.data)
        .catch((error) => {
          console.log(error.message);
        });
      setglobaldata(demo?.results);
      setisauthenticated(status);
    };
    loaddata();
  }, [navdata, status, isauthenticated]);

  const getNavbardata = (category) => {
    setnavedata(category);
  };

  const getlinkdata = (category) => {
    setlistdata(category);
  };
  return (
    <BrowserRouter>
      {isauthenticated ? (
        <Mnavabr getNavbardata={getNavbardata} getlinkdata={getlinkdata} />
      ) : (
        ""
      )}
      <Routes>
        {!isauthenticated ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Mainpage />} />
        )}
        <Route
          path="/signin"
          element={<Login isauthenticated={isauthenticated} />}
        />
        <Route
          path="/register"
          element={<Register isauthenticated={isauthenticated} />}
        />
        <Route
          path="/treanding_movie"
          element={<Movie globaldata={globaldata} />}
        />
        <Route path="/Tv" element={<Movie globaldata={globaldata} />} />
        <Route
          path="/singlecontent/:id"
          element={<Singlecontent globaldata={globaldata} />}
        />
        <Route path="/movielist" element={<Movielist listdata={listdata} />} />
        <Route path="/Webseries" element={<Movielist listdata={listdata} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
