import React, { useEffect, useState } from "react";

export const Pagination = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [number, setNumber] = useState(0);
  const [items, setItem] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setItem(props.view ? props.view : 5);
  }, [props.view]);

  const onNext = () => {
    setNumber(number + 1);
  };
  const onPrevious = () => {
    setNumber(number - 1);
  };

  const onClickPaginate = (num) => {
    props.paginate(num);
    setPage(num);
  };

  const onLast = () => {
    setPage(numberMax);
    setNumber(max - 1);
    props.paginate(numberMax);
  };

  const onFisrt = () => {
    setPage(1);
    setNumber(0);
    props.paginate(1);
  };

  let max = Math.ceil(pageNumbers.length / items);

  let numberMax = Math.max(...pageNumbers);

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
  const boundryStyles = {
    ...spanStyles,
    width: "auto",
    cursor: "pointer",
    borderRadius:props.indexBorderRadius?props.indexBorderRadius:"5%",
    padding: "0 5px",
  };
  const indexStyles = {
    ...boundryStyles,
    backgroundColor: props.indexbgColor ? props.indexbgColor : "tomato",
  };
  const selectStyles = {
    ...spanStyles,
    backgroundColor: props.selectColor ? props.selectColor : "gray",
  };
  const mainStyles = {
    display: "flex",
    justifyContent: props.justify ? props.justify : "space-evenly",
  };

  return (
    <div style={mainStyles}>
      {props.showFirst && number > 0 ? (
        <div style={boundryStyles} onClick={() => onFisrt()}>
          {props.showFirstText?props.showFirstText:"Last Page"}
        </div>
      ) : undefined}
      {number > 0 ? (
        <div onClick={() => onPrevious()} style={spanStyles}>
          {"<"}
        </div>
      ) : undefined}
      {pageNumbers.slice(number * items, number * items + items).map((num) => {
        return num === page ? (
          <div
            key={num}
            onClick={() => onClickPaginate(num)}
            style={selectStyles}
          >
            {num}
          </div>
        ) : (
          <div
            key={num}
            onClick={() => onClickPaginate(num)}
            style={spanStyles}
          >
            {num}
          </div>
        );
      })}
      {number !== max - 1 ? (
        <div onClick={() => onNext()} style={spanStyles}>
          {">"}
        </div>
      ) : undefined}
      {props.showLast && number !== max - 1 ? (
        <div style={boundryStyles} onClick={() => onLast()}>
          {props.showLastText?props.showLastText:"Last Page"}
        </div>
      ) : undefined}
      {props.showIndex ? (
        <div style={indexStyles}>
          {"Page" + " " + page + " " + "of" + " " + numberMax}
        </div>
      ) : undefined}
    </div>
  );
};
