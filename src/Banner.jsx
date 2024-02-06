import React from "react";
import doll from "./images/doll.png"
import Data from "./Data";

const Banner = () => {
    return ( 

        <div className="Banners">
                <div className="container">
        <div className="row justify-content-center align-items-center">
            <div className="col-6">
                <h1>Articles for <br></br><span>front-end devs</span></h1>
                <p>Articels on web performence,responsive web design and more</p>

            </div>
            <div className="col-4">
                <img src={doll} style={{width:500}}alt="" />
                

            </div>

        </div>

       </div>
       <Card/>
        </div>
   
           
     );
    }

     export default Banner;