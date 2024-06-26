import { Fragment, MouseEvent, useState } from "react";
import { dumpLog } from "../utils/Util";
function ListGroup() {
  let items = ["Yangon", "Mandalay", "Lashio", "NayPyiTaw", "Taungyi"];
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // items = [];
  // Event Handler
  const handleClick = (event: MouseEvent) => {
    // console.log(event);
    dumpLog(event);
  };
  const numbers = [1, 2, 3, 4, 5];
  const dNumber = numbers.map((eachNumber) => {
    return eachNumber * 2 + ",";
  });
  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <h1>This is Heading</h1>
          {/* {items.length === 0 ? <p>No item found</p> : null}  */}

          {items.length === 0 && <p>No Item Found</p>}
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                key={item}
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                onClick={() => setSelectedIndex(index)}
              >
                {item}
              </li>
            ))}
          </ul>
          <p>{dNumber}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default ListGroup;
