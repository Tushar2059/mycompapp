import { Checkbox } from "@mui/material";
import React from "react";
import Draggable from "react-draggable";
//import moon from "../Img/moon2d.jpg";
//import sun from "../Img/twodsun.jpg";
//import earth from "../Img/earth.png";

import moon from "../Img/moonwhite1.jpg";
import sun from "../Img/sunwhite.jpg";
import earth from "../Img/earthwhite.jpg";
import moonDrag from "../Img/moon2d.jpg"

const Feedback1 = (props) => {
  var cursorX = 0;
  var cursorY = 0;
  function handleChange(e) {
    cursorX = e.pageX;
    cursorY = e.pageY;
    console.log("In feedback cursorX : " + cursorX);
    console.log("In feedback cursorY : " + cursorY);
  }

  //for document
  var cursorXd;
  var cursorYd;
  document.onclick = function (e) {
    cursorXd = e.pageX;
    cursorYd = e.pageY;
    console.log("In document cursorXd : " + cursorXd);
    console.log("In document cursorXy : " + cursorYd);
  };

  function drag(ev) {
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("src", ev.target.src);
  }

  return (
    <div>

     {/* Sun ,Earth ,Moon image for reference for flag 0 (zero) */}
      {props.flag == 0 && (
        <div>
          <img
            className="img-fluid"
            style={{
              maxHeight: "100%",
              maxWidth: "50%",
              marginTop: "10%",
              marginLeft: "25%",
              //width: "9rem",
            }}
            src={sun}
            alt="Logo"
            //onClick={handleChange}
          />
          <label style={{ fontWeight: "bold" }}>-sun</label>
          <img
            className="img-fluid"
            style={{
              maxHeight: "100%",
              maxWidth: "50%",
              marginTop: "10%",
              marginLeft: "25%",
              //width: "9rem",
            }}
            src={earth}
            alt="Logo"
            //onClick={handleChange}
          />
          <label style={{ fontWeight: "bold" }}>-Earth</label>

          <img
            className="img-fluid"
            style={{
              maxHeight: "100%",
              maxWidth: "50%",
              marginTop: "10%",
              marginLeft: "25%",
              width: "7rem",
              height:"6rem"
            }}
            src={moon}
            alt="Logo"
            //onClick={handleChange}
          />

          <label style={{ fontWeight: "bold" }}>-Moon</label>
        </div>
      )}

      {/* Moon image for dragging for flag 1 */}
      {props.flag == 1 && (
        <div>
          <img
             className="img-fluid"
            id="drag1"
            draggable="true"
            onDragStart={(ev) => {
              drag(ev);
            }}
            style={{
              maxHeight: "100%",
              maxWidth: "50%",
              marginTop: "10%",
              marginLeft: "25%",
              //width: "9rem",
            }}
            src={moonDrag}
            alt="Logo"
            onClick={handleChange}
          />
        </div>
      )}


     {/* Checkboxes for questions */}
      {/* for Full Moon */}
      {props.flag==2 && (
        <>
        <label>Full moon Spring tides? :</label>
        <Checkbox ></Checkbox> 
      </>
      )} 

      {/* for last quarter Moon */}
      {props.flag==3 && (
        <>
        <label>Last quarter Moon Neap tide? :</label>
        <Checkbox ></Checkbox> 
      </>
      )} 

      {/* for new  Moon */}
      {props.flag==4 && (
        <>
        <label>New moon Spring tides? :</label>
        <Checkbox ></Checkbox> 
      </>
      )} 

      {/* for first quarter Moon */}
      {props.flag==5 && (
        <>
        <label>first quarter Moon Neap tide? :</label>
        <Checkbox ></Checkbox> 
      </>
      )} 


    </div>
  );
};

export default Feedback1;
