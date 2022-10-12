import React, { useState } from "react";
import "./showcase.css";

function Showcase({ title, color }) {
  const [change, setChange] = useState(color);
  return (
    <div className="showcase" style={{ backgroundColor: change }}>
      {title}
      <button onClick={() => setChange("blue")}>hi</button>
    </div>
  );
}

export default Showcase;
