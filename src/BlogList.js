import React from "react";
import PropTypes from "prop-types";
import { logDOM } from "@testing-library/react";

const BlogList = ({blogs, title, handleDelete}) => {
  // const blogs = props.blogs;
  // const title = props.title;

  // console.log(props, blogs);
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-pre" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
        </div>
      ))}
    </div>
  );
};

BlogList.propTypes = {};

export default BlogList;
