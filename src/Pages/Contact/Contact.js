import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Component/navbar/Navbar";
import Showcase from "../../Component/showcase/Showcase";

const Contact = ({ name }) => {
  const { hi } = useParams();
  console.log(hi);
  return (
    <div>
      <Navbar title={name} />
      <Showcase color="green" title={hi} />
    </div>
  );
};

export default Contact;
