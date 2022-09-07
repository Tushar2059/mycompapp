import React from "react";
import { useNavigate } from "react-router-dom";
import BackNextBar from "../MajorComponents/BackNextBar";

const AltheoryMidContent1 = () => {
  const navigate = useNavigate();

  const onNext = (e) => {
    navigate("/letusverify/rectheory");
  };

  return (
    <div className="" style={{ height: "100%" }}>
      <div className="d-flex align-items-center" style={{ height: "90%" }}>
        <div className="" style={{ height: "90%", width: "93%" }}>
          <h6 className="">Objective</h6>
          <p>To verify the algebraic identity (a + b)2= a2+ 2ab + b2</p>
          <h6>Algebraic Identity</h6>
          <ul>
            <li>
              An Algebraic identity is an equality, which is true for all values
              of the variables in the equality.
            </li>
            <li>
              The algebraic equations which are valid for all values of
              variables in them are called algebraic identities.
            </li>
            <li>
              In this way, algebraic identities are used in the computation of
              algebraic expressions and solving different polynomials
            </li>
            <li>
              Algebraic identities are also used for the factorization of
              polynomials.
            </li>
          </ul>
          <h6>Pre-requisite Knowledge</h6>
          <h6>Square</h6>
          <p>
            A square is a regular quadrilateral, which means that it has four
            equal sides and four equal angles of 90 degrees each.
          </p>
          <p>Area of a Square</p>
          <ul>
            <li>The product of the length of each side itself.</li>
            <li> Formula : Area = side²</li>
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

export default AltheoryMidContent1;
