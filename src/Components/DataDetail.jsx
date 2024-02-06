
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import { navigate } from "react-router-dom";

const DataDetail = ({list, data,setData}) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [postId ,setpostId] = useState({})

    

    
      const HandleDeltebutton = (index) => {
        console.log(index);
        console.log("index", index)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${index}`)
        .then((response) => {
            console.log("res---",response)
        })
        const update = data.filter(post => post.id !== index)
        setData(update);
        setShowConfirmation(false)
      };
      
    const handleCancel = () => {
        console.log("Deletion canceled.");
        setShowConfirmation(false);
    };
   
      
    return (
        <div key={list.id} className=" container card p-3">
            <h3>{list.title}</h3>
            <p>{list.body}</p>
            <p>{list.id}</p>
            <p><Link style={{ backgroundColor: "#3A833A",color :"white",textDecoration:"none",padding:"5px",borderRadius:"2px"}}to={`/ReadMore/${list.id}`}>Read more</Link></p> 
              {/* Add edit button */}
              <br></br>
              <p><Link style={{ backgroundColor: "#3A833A",color :"white",textDecoration:"none",padding:"6px",borderRadius:"2px"}} to={`/PostS/${list.id}/edit`}>Edit post</Link></p> 

              {/* <button className="btn btn-secondary" onClick={handleBack}>
      Back
    </button> */}
        
          
         
            <div>  
            </div> 
            
                
        <br></br>
    
         <div>
            <button onClick={() => setShowConfirmation(true)}type="button" class="btn btn-success">Delete</button>
            
            </div>
            {showConfirmation && (
                <div>
                    <p>Are you sure you want to delete?</p>
                    <button className='btn-success' onClick={() => HandleDeltebutton(list.id)}>Yes</button>
                    <button className='btn-success' onClick={(handleCancel)}>No</button>
                </div>
            )}
        </div>
    )
}

export default DataDetail;