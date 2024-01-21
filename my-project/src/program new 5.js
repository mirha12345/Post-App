

import React, { useState } from 'react';

const BlogList = ({ blogs }) => {
  const [expandedBlogs, setExpandedBlogs] = useState([]);

  const toggleExpand = (blogId) => {
    setExpandedBlogs((prevExpandedBlogs) =>
      prevExpandedBlogs.includes(blogId)
        ? prevExpandedBlogs.filter((id) => id !== blogId)
        : [...prevExpandedBlogs, blogId]
    );
  };

  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            {expandedBlogs.includes(blog.id) ? (
              <p>{blog.content}</p>
            ) : (
              <p>
                {blog.content.slice(0, 30)}{' '}
                <button onClick={() => toggleExpand(blog.id)}>Read more</button>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
