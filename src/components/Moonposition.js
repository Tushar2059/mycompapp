import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as THREE from 'three';
//import { DragControls } from '../ActFolder1/controls/DragControls';
//import { OrbitControls}  from '../ActFolder1/controls/OrbitControls';

import worldmap3 from "../Img/worldmap3.jpg";

import moon2 from "../Img/moon2.jpg";
import sun2 from "../Img/sun2.jpg";
import ptrimg from "../Img/pointer.png";
//import stars from "../../../Img/stars.jpg";
//import pic1 from "../component/images/pic1.jpg"
import { Canvas,useLoader,useFrame, useThree } from '@react-three/fiber';
//import { useUpdate } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
//import { BoxGeometry } from 'three';
import { OrbitControls,PerspectiveCamera, Text,Html } from '@react-three/drei';
import { useTexture } from "@react-three/drei";
import {useDrag} from "@use-gesture/react"
import Draggable from 'react-draggable';
import * as Instru from "./MajorComponents/Instruction"


const Moonposition = (props) => {

  const [positionText, setPositionText] = useState("");  
  
  const [moonText, setmoonText] = useState(true);

  var [isDragging, setIsDragging] = useState(false);
  const moonRef= useRef();
  const [moonPos,setMoonPos]=useState([6, -2, 2]);

  const {size,viewport}=useThree();
  const aspect=size.width / viewport.width;

  var [count, setCount] = useState(0);
  const mon = useRef(); 

  // const bindMoon = useDrag(({offset:[x,y,z]})=>{
  //   const [,,]=moonPos;
  //   setMoonPos([x/aspect,-y/aspect,z]);
  //   //setMoonPos([2.3,-y/aspect,z]);
  //   //if(isDragging)
  //   //setIsDragging(false);
  //   //else
  //   //setIsDragging(true);
  // },{pointerEvent:true});

  function toggle ()
  {
   // if(moonText && count==0){
     setTimeout(()=>{
    setmoonText(true);
    setTimeout(()=>{
      setmoonText(false);
    },500)
  },1000);
//}
  //window.requestAnimationFrame(toggle);
  }
 
  if(moonText && count==0)
  window.requestAnimationFrame(toggle);
 
 



var [positionEarth,setPositionEarth]=useState([3,0,0]);
var [positionMoon,setPositionMoon]=useState([positionEarth[0] +2 ,0,0]);
  const bindDrag = useDrag(({offset: [x,z]}) =>{
    const [,y,]=positionMoon;
    
   // setPositionMoon([x / aspect, -y / aspect, z]);
    
    //if(x!=0 && z!=0 )
    setPositionMoon([x / aspect +5, y , z/aspect]);
    
    console.log("position of moon = x , y , z "+ positionMoon[0].toFixed(1)+"  " + positionMoon[1] +"  " +positionMoon[2].toFixed(1));

    //new moon
    // if(positionMoon[0].toFixed(1)>=-2.5 &&  positionMoon[0].toFixed(1)<=-1.8 && positionMoon[2].toFixed(1)>=-0.3 &&  positionMoon[2].toFixed(1)<=0.3 )
    // {
    //   setPositionMoon([-2.18218,0,0]);
    //   count=1;
    //   setCount(count);
    // }
    
    //third quarter
    // if((positionMoon[0].toFixed(1)>=-0.6 &&  positionMoon[0].toFixed(1)<=0.1 && positionMoon[2].toFixed(1)==2.3) || (positionMoon[2].toFixed(1)>=-2.0 &&  positionMoon[2].toFixed(1)<=2.5 && positionMoon[1].toFixed(1)==-0.3))
    // {
      
    //   setPositionMoon([-0.3085351,0,2.300777]);
    //   count=1;
    //   setCount(count);
    // }
  
    //full moon
    if(positionMoon[0].toFixed(1)>=1.8 &&  positionMoon[0].toFixed(1)<=2.5 && positionMoon[2].toFixed(1)>=-0.3 &&  positionMoon[2].toFixed(1)<=0.3 )
    {
      //console.log("value of next in sibling component => "+props.flag1);
      
      setFullmoon(true);
      setPositionMoon([2.18218,0,0]);
      count=1;
      setCount(count);
      setmoonText(false);
      
    }
    // else if((positionMoon[0].toFixed(1)>=-0.4 &&  positionMoon[0].toFixed(1)<=0.4 && positionMoon[2].toFixed(1)==-2.3) || (positionMoon[2].toFixed(1)>=-2.6 &&  positionMoon[2].toFixed(1)<=-2.0 && positionMoon[0].toFixed(1)==0))
    // {
    //    //alert("please drop moon to its correct position");
    // //   setPositionMoon([0.0237193,0,-2.2533385]);
    // //   count=1;
    // //   setCount(count);
    // }
   

    //first quarter
    // if((positionMoon[0].toFixed(1)>=-0.4 &&  positionMoon[0].toFixed(1)<=0.4 && positionMoon[2].toFixed(1)==-2.3) || (positionMoon[2].toFixed(1)>=-2.6 &&  positionMoon[2].toFixed(1)<=-2.0 && positionMoon[0].toFixed(1)==0))
    // {
      
    //   setPositionMoon([0.0237193,0,-2.2533385]);
    //   count=1;
    //   setCount(count);
    // }

    //count=1;
     //   setCount(count);
     
    
    // if (first) {
    //    /* do stuff on drag start */ 
    //      console.log("on Drag start");
    //      setIsDragging(false);
         

    //   }
    // if (last) { 
    //   /* do stuff on drag end */ 
    //   console.log("on Drag end");
    //  // setPositionMoon([2.23,0,0])
    //   setPositionMoon([x / aspect, -y / aspect, 0]);
    //   setIsDragging(true);
    //   count=1;
    //    setCount(count);
    // }

    
  }, { pointerEvents: true });

 
  // const vp= viewpoint.getCurrentViewport()
  // console.log("current viewport : " + vp);

/////////////////////////

const [position, setPosition] = useState([4, 0, 2]);
const bind = useDrag(({ offset: [x,,z] }) => {
  const [,y,] = position;
  
 
  //setPosition([x / aspect, y, -z/aspect]);
  
     setPosition([2.23,0,0]);
    
  
 
     // setPosition([x,y,0]);
      count=1;
      setCount(count);
}, { pointerEvents: true });



useFrame(() => {
  // ref.current.rotation.z += 0.01
  // ref.current.rotation.x += 0.01
});


    const earth1 = useLoader(TextureLoader, worldmap3);
    const sun1 = useLoader(TextureLoader, sun2);
    const moon1 = useLoader(TextureLoader, moon2);
    const ptrImage = useLoader(TextureLoader, ptrimg);

   
 
  
    //var [count, setCount] = useState(0);

    var [fullmoon, setFullmoon] = useState(false);
    var [firstq, setFirstq] = useState(false);
    var [newmoon, setNewmoon] = useState(false);
    var [lastq, setLastq] = useState(false);
 
    const boxRef = useRef();
   
    useFrame(() => {
      
      if(count==1)
     // boxRef.current.rotation.y=0
    {
       
      boxRef.current.rotation.y += 0.01;
      if(boxRef.current.rotation.y==0.01)
      {
        setFullmoon(true);
        setPositionText("full moon");
        
      }
      if(boxRef.current.rotation.y==1.410000000000001)
      {
        setFullmoon(false);
        setLastq(true);
        setPositionText("Last Quater");
      }
      if(boxRef.current.rotation.y==3.1099999999999777)
      {
        setFullmoon(false);
        setLastq(false);
        setNewmoon(true);
        setPositionText("New moon");
      }
      if(boxRef.current.rotation.y==4.40999999999995)
      {
        setFullmoon(false);
        setLastq(false);
        setNewmoon(false);
        setFirstq(true);
        setPositionText("First Quater");
      }
      
      if(boxRef.current.rotation.y==6.2799999999999105)
      {
        setFirstq(false);
        boxRef.current.rotation.y=0;
        //count=count+1;
       // setCount(count);
        localStorage.setItem("count",1);
        props.instruction(Instru.Instruction_1());
        
      }
      
        //console.log(boxRef.current.rotation.y);
    } 
      
     // console.log("rotation "+boxRef.current.rotation.y);
     // boxRef.current.geometry.center()
    });
  // setTimeout(()=>{
  //   if(count==1)
  //   setFullmoon(false);
  //   setFirstq(true);
    
  // },2500);

    
     
  const [color, setColor] = useState("white")
     

      const { camera } = useThree()
      const controlsRef = useRef()    
    
      
 
  return (
    <>
      
               
      {/* position={[0,10,0]} */}
            <PerspectiveCamera makeDefault position={[2,0,10]}  >
            <OrbitControls  ref={controlsRef} enableZoom={true} enableRotate={!isDragging} 
                maxAzimuthAngle={Math.PI / 4}
                maxPolarAngle={Math.PI}
                minAzimuthAngle={-Math.PI / 4}
                minPolarAngle={0}
                  //maxZoom={5}
                 // minZoom={1}
                />
       {/* <OrbitControls minZoom={10} maxZoom={50} enabled={!isDragging} /> */}
           </PerspectiveCamera>
            
            
           
              <mesh  ref={boxRef} position={positionEarth}  >
              <sphereGeometry args={[1, 32, 32]} />

                <meshStandardMaterial map={earth1}></meshStandardMaterial>

                {/* position={[2.3,0,0]} */}
               

            <mesh  position={positionMoon}  {...bindDrag()} onPointerOver={e => setIsDragging(true)}
               onPointerOut={e => setIsDragging(false)}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial  map={moon1}/>
              </mesh>

              {/* <mesh>
              <Text fontSize={0.5} position={[positionMoon[0], positionMoon[1]+2, positionMoon[2]]}>{positionText} </Text>
            
              </mesh> */}
              </mesh>

              
            
              
              

              <mesh position={[-4.8, 0, 0]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshBasicMaterial map={sun1} color="#ff9933"/>
              </mesh>

              

          


              {/* <mesh position={moonPos}  {...bindMoon()} >
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial  map={moon1}/>
              </mesh> */}

                    {/* big ring */}
              <mesh position={[3, 0, 0]} rotation={[-1.53589,0,0]} >
                  <ringGeometry args={[2.23, 2.25, 30]}></ringGeometry>
                  <meshBasicMaterial color= "0xffffff" side={THREE.DoubleSide}/>
              </mesh>

                   {/* small rings */}
              {/* <mesh position={[0.8, 0, 0]}  rotation={[-1.53589,0,0]}>
                  <ringGeometry args={[0.5, 0.51, 30]}></ringGeometry>
                  <meshBasicMaterial color= "0xffffff" side={THREE.DoubleSide}/>
              </mesh>

              <mesh position={[2.7, 0, 2.3]}  rotation={[-1.53589,0,0]}>
                  <ringGeometry args={[0.5, 0.51, 30]}></ringGeometry>
                  <meshBasicMaterial color= "0xffffff" side={THREE.DoubleSide}/>
              </mesh> */}

              {/* rotation={[-1.53589,0,0]} */}
              <mesh position={[5.2, 0, 0]}  rotation={[0,0,0]}>
                  <ringGeometry args={[0.5, 0.51, 30]}></ringGeometry>
                  <meshBasicMaterial color= "0xffffff" side={THREE.DoubleSide}/>
              </mesh>


              {/* <mesh position={[3, 0, -2.3]}  rotation={[-1.53589,0,0]}>
                  <ringGeometry args={[0.5, 0.51, 30]}></ringGeometry>
                  <meshBasicMaterial color= "0xffffff" side={THREE.DoubleSide}/>
              </mesh> */}

             {fullmoon && (<Text fontSize={0.5} position={[5.2, 0, 0]}>Full moon </Text>)} 
             {firstq && (<Text fontSize={0.5} position={[2.7, 0, 2.3]}>First quarter </Text>) } 
              {newmoon && (<Text fontSize={0.5} position={[0.8, 0, 0]} >New Moon </Text>)}
              {lastq && (<Text fontSize={0.5} position={[3, 0, -2.3]}>Last quarter </Text>)}

              {moonText && (
                <Text fontSize={0.5} position={[7.9, 1.5, 0]}>Moon </Text>
              )} 


              {/* {moonText && (
              <mesh position={[7.9, 1, 0]} rotation-x={Math.PI} rotation-y={Math.PI }>
                <planeGeometry args={[0.5, 0.6, 2]} />
                <meshBasicMaterial map={ptrImage} color="#ff9933"/>
              </mesh>)}  */}

              
             
               {/* <Text fontSize={0.5} position={[positionMoon[0], positionMoon[1]+2, positionMoon[2]]}>{positionText} </Text>
             */}

              {/* <primitive object={new THREE.AxesHelper(30)}></primitive> */}

              
              {/* <mesh   position={positionMoon}  {...bindDrag()}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial  map={moon1}/>
              </mesh> */}

              {/* <mesh   position={[3,0,0]} rotation={[0,0,-1.5708]} >
                <capsuleGeometry args={[0.7, 1, 32,64]} />
                <meshStandardMaterial  color="#8ec5de"/>
              </mesh> */}
              

              {/* <lineGeometry attach="geometry" ref={ref} />       //position={[9.5,0,0]}
      <lineMaterial attach="material" color={color} linewidth={5} resolution={[size.width, size.height]} /> */}
             
              {/* <spotLight position={[-4.8,4.8, 0]} ></spotLight> */}
             
              {/* <spotLight position={[8,0, 0]} ></spotLight> */}
              {/* <directionalLight position={[8,0, 0]} args={["#ffffff",0.5,25]}></directionalLight> */}
              <ambientLight position={[-4.5, 0, 0]} args={["#ffffff",0.5]}></ambientLight>
            {/* <pointLight position={[-4.8, 0, 0]} args={["#ffffff",1,25]}/> */}

          <Html>

          </Html>

     
    </>
  );
}

export default Moonposition;




// import React from 'react'

// export const FullMoon = () => {
//   return (
//     <div>FullMoon</div>
//   )
// }








// import React from 'react'

// const Moonposition = () => {

//   return (
//     <div>Moonposition</div>
//   )
// }

// export default Moonposition