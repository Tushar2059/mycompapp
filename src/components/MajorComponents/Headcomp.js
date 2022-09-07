import React from "react";
import { Link } from "react-router-dom";
import Rightsidemenu from "./Rightsidemenu";
import homeImg from "../../Img/homeimg.png"
import * as Instru from "./Instruction"


const Headcomp = ({sidebarvisible}) => {
  return (
    <div className="d-flex" style={{height:"10%"}}>
      <div className="col-2  d-flex justify-content-center align-items-center" >
        <Link to="/">
          <img
            className=""
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxHeight: "100%",
            }}
            src={homeImg}
            alt="Logo"
          />
        </Link>
      </div>

      <div className="col-8  d-flex justify-content-center align-items-center" >
        <div
          className=" px-5 border border-2 d-flex justify-content-center align-items-center "
          style={{
            height: "90%",
            borderRadius: "25px",
            background: "skyblue",
          }}
        >
          <div className=" fw-bold" style={{ fontSize: "1.4vw" }}>
            {/* Algebraic Identity: <span className="fw-normal">{Instru.default()}</span>  */}
            Geography: <span className="fw-normal">Spring tides and neap tides</span> 
          </div>
        </div>
      </div>

      <div className="col-2 d-flex justify-content-center align-items-center" style={{visibility:`${sidebarvisible}`}}>
       <Rightsidemenu/>
      </div> 
    </div>
  );
};

export default Headcomp;
