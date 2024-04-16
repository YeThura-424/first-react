import React from "react";
import { dumpLog } from "../utils/Util";
const Cards = (props: any) => {
  const style = {
    margin: "16px",
    padding: "16px",
    borderRadius: "5px",
    boxShadow: "0px 0px 9px 4px #ccc4f0",
  };

  //   onLikeBtnClick = () => {
  //     this.setState((prevState, prevProp) => {
  //       return {
  //         likeCount: prevState.likeCount + 1,
  //       };
  //     });
  //   };
  return (
    <div className="example-card col-4" style={style} key={props.index}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>
        Like Count : <span className="like-count">{props.likeCount}</span>
      </p>
      <button onClick={props.onLikeBtnClick} className="btn btn-primary">
        Like
      </button>
    </div>
  );
};
export default Cards;
