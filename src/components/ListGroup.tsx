import { Fragment, MouseEvent, useState } from "react";
function ListGroup() {
  let items = ["Yangon", "Mandalay", "Lashio", "NayPyiTaw", "Taungyi"];
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // items = [];
  // Event Handler
  const handleClick = (event: MouseEvent) => {
    console.log(event);
  };
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default ListGroup;
