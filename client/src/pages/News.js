import React, { Component } from "react";
import { render } from "react-dom";
import NewsCard from "../components/NewsCard";
import "../pages/style.css";
import NewsImage from "../components/NewsImage";

const News = () => (
  <div class="container" className="rowC">
    <NewsImage />
    <NewsCard />
    
  </div>
);

render(<News />, document.getElementById("root"));

export default News;
