import React from "react";
// import img from "../Images/image_2024_01_16T07_44_25_972Z.png";
import Card from "./Card";
import doll from "../images/doll.png";

const Banner = () => {
  

  return (
  <>
  <div className="banner-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h1 style={{marginLeft:'30px', marginBottom:'24px'}}><b>Articles for</b>
               <br />
              <span className="g-clr"><b>front-end devs</b></span>
            </h1>
            <h3 style={{marginLeft:'30px' , color:'green'}}>Articles on web performance, responsive web design and more</h3>
          </div>
          <div className="col-5 pb-5">
            {/* <img src={img} alt="" className="img-fluid" /> */}
            <img src={doll} style={{width:500}} />
          </div>
        </div>
        <Card/>
      </div>
   </div>
   
   </> 
   
     
   
  );
};

export default Banner;
