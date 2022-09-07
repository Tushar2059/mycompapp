import React from "react";
import { useNavigate } from "react-router-dom";
import Instructionimg from "../../Img/Instruction.png";
import BackNextBar from "./BackNextBar";
//import { Instruction_2 } from "./Instruction";
//import * as Instru from "./MajorComponents/Instruction"
import * as Instru from "./Instruction"

const Footercomp = ({ footheight, instruction ,changeNextFlag,instructionFoot}) => {
  const navigate = useNavigate();

  const submitoperation = () => {
    console.log("hello click");
    
    if(localStorage.getItem("count")=="1")
    //if(true)
   {
      changeNextFlag(1);
      instructionFoot(Instru.Instruction_2());
      navigate("/letusverify/spring-neap-tides");
     //navigate("/letusverify/spring-neap-1");
    }
    
    localStorage.clear();
  };
  
  const onNext = (e) => {
    navigate("/letusverify/act1startpage/secondrectangle");
  };
  return (
    <div
      className="d-flex justify-content-around"
      style={{ height: `${footheight}` }}
    >
      <div
        className="bg-light  col-9 d-flex justify-content-end"
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
          display: "block",
        }}
      >
        <div className="col-11 d-flex align-items-center fw-normal fs-5">
          {instruction}
        </div>
      </div>

      <div
        className="bg-light col-2 "
        style={{
          height: "95%",
          borderRadius: "20px",
          boxShadow: "0px 7px 4px rgba(0, 0, 0, 0.25)",
          display: "block",
        }}
      >
          <BackNextBar
       
       setForward={onNext}
       clickSubmit={submitoperation}
       backvisible="visible"
       nextvisible="visible"
       submitvisible="visible"
     />
      </div>
    </div>
  );
};

export default Footercomp;
