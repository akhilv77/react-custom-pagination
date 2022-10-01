import React, { useState } from "react";
import Pagination from "react-custom-pagination";

const Example = () => {
  const posts = [
    { id: "1", name: "user 1" },
    { id: "2", name: "user 2" },
    { id: "3", name: "user 3" },
    { id: "4", name: "user 4" },
    { id: "5", name: "user 5" },
    { id: "6", name: "user 6" },
    { id: "7", name: "user 7" },
    { id: "8", name: "user 8" },
    { id: "9", name: "user 9" },
    { id: "10", name: "user 10" },
    { id: "11", name: "user 11" },
    { id: "12", name: "user 12" },
    { id: "13", name: "user 13" },
    { id: "14", name: "user 14" },
    { id: "15", name: "user 15" },
    { id: "16", name: "user 16" },
    { id: "17", name: "user 17" },
    { id: "18", name: "user 18" },
    { id: "19", name: "user 19" },
    { id: "20", name: "user 20" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  //get current Posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // when user clicks on number this function will execute

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <div
        style={{
          width: "500px",
          textAlign: "center",
          marginTop: "50px",
          height: "200px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "green" }}>
          Pagination Example
        </h1>
        {currentPosts.map((item) => {
          return (
            <p key={item.id} style={{ color: "red" }}>
              {item.name}
            </p>
          );
        })}
      </div>
      <div style={{ width: "500px" }}>
        <Pagination
          totalPosts={posts.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
          view={5}
          showLast={true}
          showFirst={true}
          showIndex={true}
        />
      </div>
    </>
  );
};
export default Example;