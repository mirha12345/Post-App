// import Data from "./Data";
// import { Link } from "react-router-dom";
import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
import DataDetail from "./DataDetail";
function Card() {

  // const [post, setPost] = useState(Data);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  


  return (
    <>
      {data.map((list) => {
        return (
          <DataDetail list={list} setData={setData} />
        )
      })}
    </>
  )
}

export default Card;
