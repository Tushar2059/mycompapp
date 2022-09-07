import React, { useState } from "react";
import workbench from "../../Img/workbench1.png";
import tools1 from "../../Img/tools1.png";
import Tools from "./Tools";
const Middlecomp = ({
  midheight,
  midcontent,
  feedback,
  toolvisible,
  toolimgsrc,
  toolname,
  toolnavigate,
  value
}) => {
  const [flag, setFlag] = useState(false);

  const ToolStore = () => {
    setFlag(!flag);
  };

  return (
    <div
      className=" d-flex justify-content-around"
      style={{ height: `${midheight}` }}
    >
      <div
        className="col-9 bg-light d-flex"
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
        
        }}
      >
        {midcontent}
      </div>

     <div
        className="col-2 bg-light d-flex"
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 10px 5px rgba(0, 0, 0, 0.40)",
         
        }}
      >
        {feedback}
      </div>
    </div>
  );
};

export default Middlecomp;

//bg-light