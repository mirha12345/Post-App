
import { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
import DataDetail from "./DataDetail";
function Card() {

  // const [post, setPost] = useState(Data);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)

  
    // ...
  
    useEffect(() =>  {
      
          setLoading(true);
      axios.get("https://jsonplaceholder.typicode.com/posts")
        
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        })
        .finally(() => {
           setLoading(false);
        });
    }, []);
  
    
  
    
  
  
    return (
      <>
      <div className='container d-flex justify-content-center'>
        {loading === true ? (
          <div>
           <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
            </div>
  
        ):(
          <div>
          {data.map((list) => {
            return (
              <DataDetail list={list} data={data} setData={setData} />
            )
          })}
       </div>
        )}
      </div>
        {/* {data.map((list) => {
          return (
            <DataDetail list={list} data={data} setData={setData} />
          )
        })} */}
      </>
    )
  }
  

export default Card;