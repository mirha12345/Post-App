import React, { useState } from 'react';
import Data from './Data';
import { Link } from 'react-router-dom';

const DataDetail = ({list,setData}) => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleCancel = () => {
        // Perform actual delete action
        setShowConfirmation(false)
        // Hide confirmation message after delete
    
      };
      
    
    
      const HandleDeltebutton = (index) => {
        console.log(index);
        const update = Data.filter(post => post.id !== index)
        setData(update);
        setShowConfirmation(false)
      }
    return (
        <div key={list.id} className="card">
            <h3>{list.title}</h3>
            <p>{list.body}</p>
            <p>{list.id}</p>
            <p><Link to={`/ReadMore/${list.id}`}>Read more</Link></p>
            <button onClick={() => setShowConfirmation(true)}type="button" class="btn btn-primary">Delete</button>

            {showConfirmation && (
                <div>
                    <p>Are you sure you want to delete?</p>
                    <button onClick={() => HandleDeltebutton(list.id)}>Yes</button>
                    <button onClick={(handleCancel)}>No</button>
                </div>
            )}
        </div>
    )
}

export default DataDetail