import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // component state [valuable, setter function]
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event handler
  // const handleCLick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  // return JSX(JavaScript XML)
  return (
    // A more concise way to wrap multiple elements using empty tags, equivalent to React.Fragment
    <>
      <h2>{heading}</h2>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
