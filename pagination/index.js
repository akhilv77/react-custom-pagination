import React, { useEffect, useState } from "react";

export const Pagination = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [number, setNumber] = useState(0);

  const [items, setItem] = useState(5);

  useEffect(() => {
    setItem(props.view ? props.view : 5);
  }, [props.view]);

  const onNext = () => {
    setNumber(number + 1);
  };
  const onPrevious = () => {
    setNumber(number - 1);
  };

  let max = Math.ceil(pageNumbers.length / items);

  const spanStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: props.color ? props.color : "white",
    backgroundColor: props.bgColor ? props.bgColor : "skyblue",
    width: props.boxWidth ? props.boxWidth : "40px",
    height: props.boxHeight ? props.boxHeight : "40px",
    cursor: "pointer",
    borderRadius: props.boxRadius ? props.boxRadius : "50%",
  };

  const mainStyles = {
    display: "flex",
    justifyContent: props.justify ? props.justify : "space-evenly",
  };

  console.log(items);

  return (
    <div style={mainStyles}>
      {number > 0 ? (
        <div onClick={() => onPrevious()} style={spanStyles}>
          {"<<"}
        </div>
      ) : undefined}
      {pageNumbers
        .slice(number * items, number * items + items)
        .map((number) => {
          return (
            <div
              key={number}
              onClick={() => props.paginate(number)}
              style={spanStyles}
            >
              {number}
            </div>
          );
        })}
      {number !== max - 1 ? (
        <div onClick={() => onNext()} style={spanStyles}>
          {">>"}
        </div>
      ) : undefined}
    </div>
  );
};
