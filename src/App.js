import React, { useState } from "react";

import { Pagination } from "react-custom-pagination";

const App = () => {
  const posts = [
    { id: "1", name: "user1" },
    { id: "2", name: "user2" },
    { id: "3", name: "user3" },
    { id: "4", name: "user4" },
    { id: "5", name: "user5" },
    { id: "6", name: "user6" },
    { id: "7", name: "user7" },
    { id: "8", name: "user8" },
    { id: "9", name: "user9" },
    { id: "10", name: "user10" },
    { id: "11", name: "user11" },
    { id: "12", name: "user12" },
    { id: "13", name: "user13" },
    { id: "14", name: "user14" },
    { id: "15", name: "user15" },
    { id: "16", name: "user16" },
    { id: "17", name: "user17" },
    { id: "18", name: "user18" },
    { id: "19", name: "user19" },
    { id: "20", name: "user20" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

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
      <h1>Pagination Example</h1>
      <div style={{ width: "300px", textAlign: "center" }}>
        {currentPosts.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
        <Pagination
          totalPosts={posts.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
        />
      </div>
    </>
  );
};
export default App;
