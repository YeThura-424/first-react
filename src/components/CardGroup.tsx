import { Fragment } from "react";

function CardGroup() {
  const style = {
    margin: "16px",
    padding: "16px",
    borderRadius: "5px",
    boxShadow: "2px 0px 3px #eed44a",
  };

  return (
    <Fragment>
      <div className="row">
        <div className="example-card col-4" style={style}>
          <h2>Card Heading 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            autem vel odit asperiores quae eveniet reprehenderit obcaecati,
            ipsum consectetur sunt temporibus nam, ab possimus aspernatur
            repudiandae cumque amet quia numquam!
          </p>
          <button className="btn btn-primary">ClickMe</button>
        </div>
        <div className="example-card col-4" style={style}>
          <h2>Card Heading 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            autem vel odit asperiores quae eveniet reprehenderit obcaecati,
            ipsum consectetur sunt temporibus nam, ab possimus aspernatur
            repudiandae cumque amet quia numquam!
          </p>
          <button className="btn btn-primary">ClickMe</button>
        </div>
        <div className="example-card col-3" style={style}>
          <h2>Card Heading 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            autem vel odit asperiores quae eveniet reprehenderit obcaecati,
            ipsum consectetur sunt temporibus nam, ab possimus aspernatur
            repudiandae cumque amet quia numquam!
          </p>
          <button className="btn btn-primary">ClickMe</button>
        </div>
      </div>
    </Fragment>
  );
}

export default CardGroup;
