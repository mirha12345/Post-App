import React from 'react';
import { useLocation, } from 'react-router-dom';

const Datadetail = () => {
  const {state} =useLocation()

  return (
    <div>
     <div className="container">
         <div className="row">
            <div className="col-md-12">
              <div className="card my-3">
                 <div className="card-body">
                <h2 className="card-title">{state.key.title}</h2>
                <p className="card-text">{state.key.body}</p>
                <p className="card-text">{state.key.id}</p>
                <p className="card-text">{state.key.userId}</p>
                <p>{state.key2}</p>
                 </div>
              </div>
            </div>
         </div>
         </div>
    </div>
  );
};

export default Datadetail;