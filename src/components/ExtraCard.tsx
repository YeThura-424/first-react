import React, { Component, Fragment } from "react";
import { dumpLog } from "../utils/Util";
class Cards extends Component {
  style = {
    margin: "16px",
    padding: "16px",
    borderRadius: "5px",
    boxShadow: "0px 0px 9px 4px #ccc4f0",
  };
  cardArr = [
    {
      title: "Block Title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritati autem vel odit asperiores quae eveniet reprehenderit obcaecati",
    },
    {
      title: "Block Title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritati autem vel odit asperiores quae eveniet reprehenderit obcaecati",
    },
    {
      title: "Block Title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritati autem vel odit asperiores quae eveniet reprehenderit obcaecati",
    },
  ];
  state = {
    showCard: true,
  };
  blogCards = this.cardArr.map((item, index) => {
    return (
      <div className="example-card col-3" style={this.style} key={index}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <button className="btn btn-primary">ClickMe</button>
      </div>
    );
  });
  toggleCards = () => {
    this.setState((prevState, prevProp) => {
      return {
        showCard: !prevState.showCard,
      };
    });
  };
  render() {
    dumpLog("Component Rendered");
    return (
      <Fragment>
        <button onClick={this.toggleCards}>
          {this.state.showCard ? "Hide Card" : "Show Card"}
        </button>
        {this.state.showCard ? this.blogCards : null}
      </Fragment>
    );
  }
}

export default Cards;
