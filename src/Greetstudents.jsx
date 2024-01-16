import React from "react";
import { useParams } from "react-router-dom";

const GreetStudent = () => {
  const name = useParams();
  console.log(name, "utuytut");
  return (
    <div>
      <h1>Hello {name.student_name}</h1>
    </div>
  );
};

export default GreetStudent;