import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : JSON.parse(localStorage.getItem('counter_' + props.id))
    };

    this.updateCounter = this.updateCounter.bind(this);
   
  }

  updateLocalStorage(counter){
      localStorage.setItem('counter_' + counter.id, JSON.stringify(counter));
  }

  updateCounter = (inc) =>{
    if (inc) {
      let counter = {...this.state.counter };
      counter.like = counter.like + 1;
      this.setState({ counter });
      this.updateLocalStorage(counter);

    } else {
        let counter = {...this.state.counter };
        counter.dislike = counter.dislike + 1;
        this.setState({ counter });
        this.updateLocalStorage(counter);
    }


  }

  render() {
    return (
      <div>
        <button
          onClick={() => this.updateCounter(true)}
          className="buttonLikeDislike"
        >
          <i className="far fa-thumbs-up  green-text fa-md"></i> {this.state.counter.like}
        </button>
        <button
          onClick={() => this.updateCounter(false)}
          className="buttonLikeDislike"
        >
          <i className="far fa-thumbs-down red-text fa-md"></i>
          {this.state.counter.dislike}
        </button>
      </div>
    );
  }
}

export default Counter;
