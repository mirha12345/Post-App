import React from "react";
import { Link } from "react-router-dom";

const Students = () => {
  const student = ["Ali", "Ahsan", "Shahrob"];

  return (
    <div>
      {student.map((student) => (
        <>
          {console.log(student,"stu")}
          <Link to={`Students/${student}`}>
            <h1>{student}</h1>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Students;