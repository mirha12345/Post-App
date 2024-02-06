// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const Fetch = () => {
//   const [data, setData] = useState([]);
//   let{id} = useParams()

//   useEffect(() => {
//     axios.get(`https://jsonplaceholder.typicode.com/posts ${id}`)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Faches</h1>
//       <table className="table" border="2">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Body</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((blog) => {
//             return (
//               <tr key={blog.id}>
//                 <td>{blog.id}</td>
//                 <td>{blog.title}</td>
//                 <td>{blog.body}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Fetch;