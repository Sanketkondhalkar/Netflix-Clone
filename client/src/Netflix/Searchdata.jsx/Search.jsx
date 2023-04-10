import React from "react";
import { useLocation } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const { state } = useLocation();
  console.log(state);

  return <h1>Searching component</h1>;
};

export default Search;
