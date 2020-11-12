import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  paginate,
  color,
  bgColor,
  boxHeight,
  boxWidth,
  justify,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: justify ? justify : "space-evenly",
      }}
    >
      {pageNumbers.map((number) => {
        return (
          <div
            onClick={() => paginate(number)}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: color ? color : "white",
              backgroundColor: bgColor ? bgColor : "skyblue",
              width: boxWidth ? boxWidth : "40px",
              height: boxHeight ? boxHeight : "40px",
              cursor: "pointer",
            }}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
