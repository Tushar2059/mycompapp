import React from "react";
import  { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
//import stars from "../../../Img/stars.jpg"
import stars from "../Img/stars.jpg"
import Moonposition from "./Moonposition";
import MainSpringNeap from "./MainSpringNeap";
import MainSpringNeap1 from "./MainSpringNeap1";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";


const SprinneaptidesMidContent = ({flag,instruction,changeNextFlag}) => {
  const navigate=useNavigate();
  return (
    <div className="" style={{ width:"100%" }}>
     
     <div className=' col-12  ' style={{height:"90%",backgroundImage:"url("+ stars +")",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}>
     {((flag)==0) &&   <Canvas id="three-canvas-container" >      
      <Suspense fallback={null}>
        {((flag)==0) && <Moonposition flag1={flag} instruction={instruction}/>}
       
        {console.log("value of next in sibling component => "+flag)}
      </Suspense>
    </Canvas>  }

    {(flag==1 || flag==2 || flag==3 || flag==4 || flag==5)
      && (<MainSpringNeap1 instruction={instruction} changeNextFlag={changeNextFlag}/>)}
    <ToastContainer></ToastContainer>
   
    </div>
      
    </div>
  );
};

export default SprinneaptidesMidContent;
