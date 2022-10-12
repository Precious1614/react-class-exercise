import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Component/navbar/Navbar";
import Showcase from "../../Component/showcase/Showcase";

const About = ({ name }) => {
  const location = useLocation();
  console.log(location.state);

  if (location) {
  }

  return (
    <div>
      <Navbar title={name} />
      <Showcase color='blue' title={location.state? location.state : "About"} />
    </div>
  );
};

export default About;
