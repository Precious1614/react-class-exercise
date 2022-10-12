// import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";
import { BsFacebook } from "react-icons/bs";

const Home = () => {
  // let name = "Lady B";
  const [name, setName] = useState("Lady B");
  const [age, setAge] = useState(20);
  const [blogs, setBlogs] = useState([
    { title: "read note", body: "lorem 340", author: "me", id: 1 },
    { title: "read note now", body: "lorem 340 and", author: "you", id: 2 },
    { title: "read notebook", body: "lorem", author: "me", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const handleClick = () => {
    setName("Her lady");
    setAge(30);
    // console.log(name);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>click me</button>
      <BlogList
        blogs={blogs}
        title="yours readSr"
        handleDelete={handleDelete}
      />
      <BsFacebook/>
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "me")}
        title="yours two"
      /> */}
    </div>
  );
};

export default Home;
