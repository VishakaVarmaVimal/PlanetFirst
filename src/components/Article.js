import React from "react";
import Counter from "../components/counter";

const Article = props => {
  return (
    <div className="article-card">
      <div className="container">
        <div className="row">
          <div className=" col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <br></br>
            <h1 className="articleTitle">{props.title}</h1>
            <div className="articleContent">{props.desc}</div>
            <br></br>
            <Counter id={props.id}/>
          </div>

          <div className=" col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <div className="imageBox">
              <img src={props.imgUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
