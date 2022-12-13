
import { useCallback } from "react";
import {loadFull} from "tsparticles"
import Particles from 'react-tsparticles';
import particlesConfig from "./config/particle-config"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { Skills } from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Github from "./Components/Github/Github";
import { Contact } from "./Components/Contact/Contact";
import Bottom from "./Components/Bottom/Bottom";

function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []); 
  
  return (
    <div className="App">
      
     <Particles params={particlesConfig} id="tsparticles" init={particlesInit} loaded={particlesLoaded} />
     
       <Navbar />
       <Skills />
       <Projects />
       <Github />
       <Contact />
       <Bottom />
    </div>
  );
}

export default App;
