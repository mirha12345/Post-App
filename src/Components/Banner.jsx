import React from "react";
import Card from "./Card";
import doll from "../images/doll.png";
import { Link } from "react-router-dom";



const Banner = () => {
    return ( 
        <div className="container fluid">
        <div className='row bg-light' style={{ marginBottom: 80 }}>
          <div className="content col-lg-5 bg-light" style={{ marginLeft: 30, padding: 80 }}>
            <h1>Artical for</h1>
            <h2 style={{ color: "green" }}>front-end-dev</h2>
            <p>Artical on web proformance, resposnive web design and more
            </p>
          </div>
          <div className="content col-lg-5 bg-light" style={{ padding: 10 }}>
            <img className="img fluid" src={doll} style={{ height: 300, width: 500 }} />
          </div>
          <div>
          <Link className="btn btn-success" style={{marginLeft:80}} to={`/add`}>Add post</Link>
          </div>
        </div>
       
      
       <Card/>
        </div>
          
   
           
     );
    }

     export default Banner;
