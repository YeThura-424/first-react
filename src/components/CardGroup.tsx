import { Fragment } from "react";
import { isEmptyArr } from "../utils/Util";
import Cards from "./CardGroupList";
function CardGroup() {
  const style = {
    margin: "16px",
    padding: "16px",
    borderRadius: "5px",
    boxShadow: "0px 0px 9px 4px #ccc4f0",
  };
  const cardArr = [
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

  const blockCards = isEmptyArr(cardArr)
    ? []
    : cardArr.map((blog, index) => {
        return (
          // <div className="example-card col-3" style={style} key={index}>
          //   <h2>{blog.title}</h2>
          //   <p>{blog.description}</p>
          //   <button className="btn btn-primary">ClickMe</button>
          // </div>
          <Cards
            title={blog.title}
            description={blog.description}
            key={index}
          />
        );
      });
  return (
    <Fragment>
      <div className="row">{blockCards}</div>
    </Fragment>
  );
}

export default CardGroup;
