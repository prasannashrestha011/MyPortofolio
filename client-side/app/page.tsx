

import FramerWrapper from "./Components/Animations/FramerMotion";
import Index from "./ViewComponents/Index";
import ParentView from "./ViewComponents/ParentView";
import Projects from "./ViewComponents/Projects";
import Skill from "./ViewComponents/Skill";





export default function Home() {
  return (
    <div className="" >
   
    <ParentView>
 
      <FramerWrapper>
        <Index className="snap-center"/>
      </FramerWrapper>
      <Skill className="snap-center"/>
      <Projects className="snap-center"/>
     
    </ParentView>
   

    </div>
  );
}
