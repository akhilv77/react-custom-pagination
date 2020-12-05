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

![pagination](https://user-images.githubusercontent.com/56865356/99876094-82ca4d00-2c1a-11eb-96e5-5fb89d197784.gif)

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

| Name              | Required | Type           | Default     | Description                                              |
| ----------------- | -------- | -------------- | ----------- | -------------------------------------------------------- |
| totalPosts        | Yes      | Number         | ---         | total no of posts                                        |
| postsPerPage      | Yes      | Number         | ---         | no of posts per page                                     |
| paginate          | Yes      | function       | ---         | this function will execute when click on paginate number |
| view              | No       | Number         | 5           | no of paginates                                          |
| showIndex         | No       | Boolean        | false       | shows the index bar                                      |
| showFirst         | No       | Boolean        | false       | shows the go to first page button                        |
| showLast          | No       | Boolean        | false       | shows the go to Last page button                         |
| showFirstText     | No       | String         | "First Page"| text inside show first page button                       |
| showLastText      | No       | String         | "Last Page" | text inside show last page button                        |
| color             | No       | String         | "white"     | color of the text                                        |
| bgColor           | No       | String         | "skyblue"   | background color                                         |
| indexbgColor      | No       | String         | "tomato"    | background color of index bar                            |
| selectColor       | No       | String         | "grey"      | background color when selected                           |
| boxHeight         | No       | String, Number | "40px"      | height                                                   |
| boxWidth          | No       | String, Number | "40px"      | width                                                    |
| boxRadius         | No       | String         | "50%"       | border-radius                                            |
| indexBorderRadius | No       | String         | "5%"        | border-radius of index tab                               |
| justify           | No       | String         | "center"    | justify-content                                          |

# optional props

```
//view
<Pagination
    view={5}           //no of paginates
 />

```

## License

ISC © [akhilv77](https://github.com/akhilv77)
