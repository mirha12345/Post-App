import React from "react";
import { useParams } from "react-router-dom";
import { student } from "./Data"; 

const Newstudents = () => {
  let {id} = useParams();
  const postdata =student.find(postdata => String(postdata.id) === id);
  return (
    <div>
      <h3> {postdata.id}</h3>
      <p>{id}</p>
    </div>
  );
};

export default Newstudents;