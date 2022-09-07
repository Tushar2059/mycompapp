import React from 'react'
import Headcomp from "../MajorComponents/Headcomp";
import Middlecomp from "../MajorComponents/Middlecomp";
import backgroundImg from "../../Img/backg.png";
import AltheoryMidContent2 from './AltheoryMidContent2';


const Altheory2 = () => {
  return (
    <div
    style={{
      height: "100vh",
      backgroundImage: "url(" + backgroundImg + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <Headcomp />

    <Middlecomp
      midheight="90%"
      midcontent={<AltheoryMidContent2/>}
      toolvisible="hidden"
    />
  </div>
  )
}

export default Altheory2