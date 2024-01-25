import React from "react";
import { Routes, Route,  } from "react-router-dom";
// import {Home} from "./Home";
// import {About} from "./About";
// import {Contact } from "./Contact";
// import Students from "./Studentlist";
// import GreetStudent from "./Greetstudents";
import Newstudents from "./Newstudents";



const Routers = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to='/home'/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Students" element={<Students/>}/> */}
      <Route path="/:student_id" element={<Newstudents/>}/>

      {/* <Route path="*" element={<Contact/>} /> */}
    </Routes>
  );
};


export default Routers;