import React, { Component } from "react";
import "../styles/news.css";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    let ourDate = new Date();

    //Change it so that it is 7 days in the past.
    let pastDate = ourDate.getDate() - 7;
    ourDate.setDate(pastDate);
    let formatted_date = ourDate.getFullYear() + "-" + (ourDate.getMonth() + 1) + "-" + ourDate.getDate()

    //Log the date to our web console.
    console.log(ourDate);
    fetch(
      'https://newsapi.org/v2/everything?qInTitle=("Climate")&from='+formatted_date+'&sortBy=publishedAt&language=en&apiKey=308dd344ddfb43e6bc1e857546a2c06d'
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({
          articles: myJson.articles
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="News">
        {this.state.articles.map((item, index) => {
          if (!(item.urlToImage == null) && !(item.urlToImage === "null")) {
            return (
              <div className="news-wrapper">
                <h2>{item.title}</h2>
                <b className="news-author">{item.author}</b>
                <div className="img-wrapper">
                  <img
                    className="news-image"
                    src={item.urlToImage}
                    alt="Unavailable"
                  />
                </div>
                <p className="news-content">
                  {item.content}
                  <br></br>
                  <a className="news-url" href={item.url}>
                    Read More
                  </a>
                  <br></br>
                </p>
              </div>
            );
          }
          return <div></div>;
        })}
      </div>
    );
  }
}

export default News;
