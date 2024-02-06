// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// const EditPost = () => {
//     const { state } = useLocation()
//     const [postData, setPostData] = useState({
//         title: state?.data?.title ? state?.data?.title : '',
//         content: state?.data?.body ? state?.data?.body : '',
//     });
//     console.log(useLocation(), "location---")
//     const [postId, setPostId] = useState(/* Set the post ID you want to edit */);

//     useEffect(() => {
//         // Fetch post data from the API when the component mounts
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//             .then(response => setPostData(response.data))
//             .catch(error => console.error('Error fetching post:', error));
//     }, [postId]);

//     const handleInputChange = e => {
//         // Update the state as the user types
//         const { name, value } = e.target;
//         setPostData(prevData => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = e => {
//         e.preventDefault();

//         // Send a request to the API to update the post
//         axios.put(`https://jseholder.typicode.com/posts/${postId}`, postData)onplac
//             .then(response => {
//                 console.log('Post updated successfully:', response.data);
//                 // Optionally, you can redirect the user or perform other actions after updating the post
//             })
//             .catch(error => console.error('Error updating post:', error));
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Title:
//                 <input
//                     type="text"
//                     name="title"
//                     value={postData.title}
//                     onChange={handleInputChange}
//                 />
//             </label>
//             <br />
//             <label>
//                 Content:
//                 <textarea
//                     name="content"
//                     value={postData.content}
//                     onChange={handleInputChange}
//                 />
//             </label>
//             <br />
//             {/* Add other form fields as needed */}
//             <button type="submit">Save Changes</button>
//         </form>
//     );
// };

// export default EditPost;
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputs, setInputs] = useState({ userId: "", title: "", body: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleBack = () => {
    navigate(-1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        inputs
      );
      console.log(id)
      console.log("Post updated:", response.data);
      setInputs({ userId: "", title: "", body: "" });
      // Redirect after successful update
      navigate("/");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      console.log(id ,"rtifjj")
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log(response,"äpi-response")
        setInputs(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="container">
      <button type="button" class="btn btn-success" onClick={()=>handleBack()}>Back</button>
      <h6 className="text-center">Update Post</h6>
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="userId"
                name="userId"
                placeholder="userId"
                value={inputs.userId}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={inputs.title}
                onChange={handleChange}
                placeholder="title"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="5"
                id="body"
                name="body"
                placeholder="body"
                value={inputs.body}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success">
              Update Post
            </button>
          </form>
        </div>
      </div>
      {/* Remove the edit button, as it's unnecessary in the edit page */}
              {/* Add the back button */}
              {/* <BackButton /> */}

    </div>
  );
};

export default EditPost;


