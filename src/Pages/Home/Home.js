import React from "react";
import Navbar from "../../Component/navbar/Navbar";
import Showcase from "../../Component/showcase/Showcase";

const Home = ({ name }) => {
  return (
    <div>
      <Navbar title={name} />
      <Showcase title='Home' color="red" />
    </div>
  );
};

export default Home;
