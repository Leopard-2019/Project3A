import React, { Component } from "react";
import { render } from "react-dom";
import SearchCard from "../components/SearchCard";
import PharmacyCard from "../components/PharmacyCard";

const Search = () => (
  <div class="container" className="rowC">
    <PharmacyCard />
    <SearchCard />
  </div>
);

render(<Search />, document.getElementById("root"));

export default Search;
