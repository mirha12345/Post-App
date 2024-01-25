
import React from 'react';
// import { useParams } from 'react-router-dom';
// import Data from './Data';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const DetailPage = () => {
//    let { id } = useParams();
// console.log(useLocation(),'-----Location');
// console.log(state,'------state');
// const PostData = data.find(PostData => String(PostData.id) === id);
const [data, setData] = useState([]);

useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/posts/2")
    .then((response) => {
      setData(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);
    return (
        <>
        <section  className="details-section">
            <div>
                <h3>{data.title}</h3>
                <p>{data.body}</p>
                <p>{data.id}</p>
            </div>
        </section>
   </>
        // <div className="Blog-Page">
        //     <div className="container">
        //         <div className="row">
        //             <div className="col-lg-12">
        //                 <div className="card my-3">
        //                     <div className="card-body">
        //                         <h2 className="card-title g-clr">{state.key.title}</h2>
        //                         <p className="card-text">{state.key.body}</p>
        //                         <p className="card-text">{state.key.id}</p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default DetailPage;