import React from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "../MajorComponents/BackNextBar";
const AltheoryMidContent2 = () => {
  const navigate = useNavigate();

  const onNext = (e) => {
    navigate("/letusverify/rectheory");
  };
  return (
    <div className="" style={{ height: "100%" }}>
      <div className="d-flex align-items-center" style={{ height: "90%" }}>
        <div className="" style={{ height: "90%", width: "93%" }}>
          <h6>Rectangle</h6>
          <p>
            rectangle is a quadrilateral with four right angles and opposite
            sides are equal. The length of a rectangle is the size of the longer
            side, whereas the breadth is the size of the shorter side
          </p>
          <p>Area of a Rectangle</p>
          <ul>
            <li>The product of its length and breadth</li>
            <li>Formula : Area = length x breadth</li>
          </ul>
        </div>
      </div>

      <BackNextBar
        setForward={onNext}
        backvisible="visible"
        nextvisible="visible"
        submitvisible="hidden"
      />
    </div>
  );
};

export default AltheoryMidContent2;
