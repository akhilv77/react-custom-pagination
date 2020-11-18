# react-custom-pagination

> simple and responsive pagination for react.

[![NPM](https://img.shields.io/npm/v/@akhilv77/react-pagination.svg)](https://www.npmjs.com/package/react-custom-pagination) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-custom-pagination
```

# what is this ?

Get Responsive and yet simple pagination for React .

# installation

`npm install react-custom-pagination --save`

# import

```
import { Pagination } from "react-custom-pagination";
```

# usage

```
 //list of items you want to render

 const posts=[
    { id: "1", name: "user1" },
    { id: "2", name: "user2" },
    { id: "3", name: "user3" },
    { id: "4", name: "user4" },
    { id: "5", name: "user5" },
    { id: "6", name: "user6" },
    ]


  const [currentPage, setCurrentPage] = useState(1);        //page
  const [postsPerPage] = useState(5);                      // no of posts you want to render in one page

  //get current Posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // when user clicks on number this function will execute

  const paginate = (number) => {
    setCurrentPage(number);
  };


//map current posts to render 5 posts per page

<Pagination
  totalPosts={posts.length}
  postsPerPage={postsPerPage}
  paginate={paginate}
/>

```

# example

```
import React, { useState } from "react";
import "./App.css";
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

```

# Required

1. totalPosts (required) //total no of posts

```
 <Pagination
    totalPosts={posts.length}
  />

```

2. postsPerPage (required) // no of posts per page

```
 <Pagination
   postsPerPage={postsPerPage}
  />

```

3. paginate (required)

// when user clicks on number this function will execute and change currentPage

```
//paginate function

 const paginate = (number) => {
    setCurrentPage(number);
  };

//pagination component

<Pagination
    paginate={paginate}
 />

```

# props

| Name         | Required | Type          | Default   | Description                                              |
| ------------ | -------- | ------------- | --------- | -------------------------------------------------------- |
| totalPosts   | Yes      | Number        | ---       | total no of posts                                        |
| postsPerPage | Yes      | Number        | ---       | no of posts per page                                     |
| paginate     | Yes      | function      | ---       | this function will execute when click on paginate number |
| view         | No       | Number        | 5         | no of paginates                                          |
| color        | No       | String        | "white"   | color of the text                                        |
| bgColor      | No       | String        | "skyblue" | background color                                         |
| boxHeight    | No       | String,Number | "40px"    | height of the paginate div                               |
| boxWidth     | No       | String,Number | "40px"    | width of the paginate div                                |
| borderRadius | No       | String        | "50%"     | border - radius of the paginate div                      |
| justify      | No       | String        | "center"  | justify-content                                          |

# optional props

```
//view
<Pagination
    view={5}           //no of paginates
 />

```

## License

ISC © [akhilv77](https://github.com/akhilv77)
