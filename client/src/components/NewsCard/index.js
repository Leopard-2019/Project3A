import React, { Component } from "react";
import "./style.css";
import { render } from "react-dom";

const APIkey4 = process.env.REACT_APP_NEWS_KEY;

class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=" + APIkey4 + "&limit=10"
    )
      .then(response => {
        return response.json();
      })
      .then(myJSON => {
        //console.log(myJSON);
        this.setState({
          articles: myJSON.articles
        });
      });
  }
  render() {
    console.log(this.state);
    return (
      <div style={{ textAlign: "center" }}>
        {this.state.articles.map((item, index) => {
          return (
            <div className="newsBox">
              <h5 style={{ textAlign: "center" }}>{item.title}</h5>
              <br></br>
              <img src={item.urlToImage} style={{ width: "40vw" }} />
              <br></br>
              <a href={item.url}>Read More</a>
              <br></br>
              <b>{item.author}</b>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NewsCard;
