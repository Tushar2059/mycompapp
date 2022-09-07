import React from "react";
import { Route, Routes } from "react-router-dom";
// import AlgebraicIdentity from "./components/AlgebraicIdentity";
//import Allshapes from "./components/Allshapes";
import Help from "./components/HelpVideo/Help";
import MainSpringNeap from "./components/MainSpringNeap";
import MainSpringNeap1 from "./components/MainSpringNeap1";

//import Insertvals from "./components/Insertvals";
import Errorpage from "./components/MajorComponents/Errorpage";
import Launchpage from "./components/MajorComponents/Launchpage";
import Letusverify from "./components/MajorComponents/Letusverify";
//import Practicalverification from "./components/Practicalverification";
import Play from "./components/quiz/Play";
import QuizInstructions from "./components/quiz/QuizInstructions";
import Springneaptides from "./components/Springneaptides";
import Springneaptides1 from "./components/Springneaptides1";

//import Rectangleab from "./components/Rectangleab";
//import Rectangleba from "./components/Rectangleba";
import AItheory1 from "./components/Theory/AItheory1";
import Altheory2 from "./components/Theory/Altheory2";

//import TwoSquares from "./components/TwoSquares";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Launchpage />} />
      <Route path="/letusverify" element={<Letusverify />} />
      <Route path="/letusverify/spring-neap-tides"  element={<Springneaptides />}  ></Route>
      {/* <Route path="/letusverify/main-spring-neap" element={<MainSpringNeap1 />} /> */}
      <Route path="/letusverify/spring-neap-1" element={<Springneaptides1 />} />
      
       
      
    
      <Route
        path="/letusverify/main-spring-neap"
        element={<MainSpringNeap />}
      />
      {/* <Route
        path="/letusverify/algebraic-identity/insertvals"
        element={<Insertvals />}
      />

      <Route
        path="/letusverify/algebraic-identity/twosquares"
        element={<TwoSquares />}
      /> */}

      {/* <Route
        path="/letusverify/algebraic-identity/rectangle-ab"
        element={<Rectangleab />}
      />

      <Route
        path="/letusverify/algebraic-identity/rectangle-ba"
        element={<Rectangleba />}
      />

      <Route
        path="/letusverify/algebraic-identity/allshapes"
        element={<Allshapes />}
      />

      <Route
        path="/letusverify/algebraic-identity/practical-verification"
        element={<Practicalverification />}
      /> */}

      <Route path="/letusverify/sqtheory" element={<AItheory1 />} />
      <Route path="/letusverify/rectheory" element={<Altheory2/>} />
      

      <Route path="/letusverify/instructions" element={<QuizInstructions />} />
      <Route path="/letusverify/quiz" element={<Play />} />

    
      <Route path="/letusverify/help" element={<Help />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  );
};

export default App;
