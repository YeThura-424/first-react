import React, { Component } from "react";
import { dumpLog } from "../utils/Util";
class Cards extends Component {
  style = {
    margin: "16px",
    padding: "16px",
    borderRadius: "5px",
    boxShadow: "0px 0px 9px 4px #ccc4f0",
  };
  state = {
    likeCount: 0,
  };

  render() {
    return (
      <div
        className="example-card col-4"
        style={this.style}
        key={this.props.index}
      >
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>
          Like Count :{" "}
          <span className="like-count">{this.state.likeCount}</span>
        </p>
        <button className="btn btn-primary">Like</button>
      </div>
    );
  }
}
export default Cards;
