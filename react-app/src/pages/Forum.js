import React, { Component } from "react";
import "../styles/news.css";
// const news = require('gnews');
console.log(process.env)


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
    let formatted_date = ourDate.getFullYear() + "-" + (ourDate.getMonth()) + "-" + ourDate.getDate()

    //Log the date to our web console.
    console.log(ourDate);
    console.log(process.env.NEWS_API_KEY);
    fetch('https://gnews.io/api/v3/search?q=climate&mindate'+formatted_date+'&language=en&in=title&image=required&token='+process.env.GNEWS_API_KEY)
      .then(function (response) {
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
    // console.log(this.state.articles[0].title);
    return (
      <div className="News">
        {this.state.articles.map((item) => {
          // if (!(item.image == null) && !(item.image === "null")) {
            return (
              <div className="news-wrapper">
                <h2>{item.title}</h2>
                <b className="news-author">{item.source.name}</b>
                <div className="img-wrapper">
                  <img
                    className="news-image"
                    src={item.image}
                    alt="Unavailable"
                  />
                </div>
                <p className="news-content">
                  {item.description}
                  <br></br>
                  <a className="news-url" href={item.url}>
                    Read More
                  </a>
                  <br></br>
                </p>
              </div>
            );
          // }
         // return <div>error</div>;
        })}
      </div>
    );
  }
}


export default News;
