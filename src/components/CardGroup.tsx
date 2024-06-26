import { Fragment, Component, ReactNode } from "react";
import { isEmptyArr } from "../utils/Util";
import Cards from "./CardGroupList";
class CardGroup extends Component {
  style = {
    margin: "16px",
    padding: "16px",
    borderRadius: "5px",
    boxShadow: "0px 0px 9px 4px #ccc4f0",
  };
  state = {
    cardArr: [
      {
        title: "Block Title 1",
        likeCount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritati autem vel odit asperiores quae eveniet reprehenderit obcaecati",
      },
      {
        title: "Block Title 2",
        likeCount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritati autem vel odit asperiores quae eveniet reprehenderit obcaecati",
      },
      {
        title: "Block Title 3",
        likeCount: 0,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritati autem vel odit asperiores quae eveniet reprehenderit obcaecati",
      },
    ],
  };
  onLikeBtnClick = (pos: any) => {
    const updatedBlogList = this.state.cardArr;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;
    console.log(updatedBlogList);
    this.setState({ cardArr: updatedBlogList });
    // console.log(updatedBlogObj);
  };

  render() {
    const blockCards = isEmptyArr(this.state.cardArr)
      ? []
      : this.state.cardArr.map((blog, index) => {
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
              likeCount={blog.likeCount}
              onLikeBtnClick={() => this.onLikeBtnClick(index)}
            />
          );
        });
    return (
      <Fragment>
        <div className="row">{blockCards}</div>
      </Fragment>
    );
  }
}

export default CardGroup;
