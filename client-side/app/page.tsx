import MainView from "./ViewComponents/MainView";

import ParentView from "./ViewComponents/ParentView";
import Projects from "./ViewComponents/Projects";
import SkillsView from "./ViewComponents/SkillsView";
import ThemeSwitchView from "./ViewComponents/ThemeSwitchView";



export default function Home() {
  return (
    <div >
   
    <ParentView>
   
    <ThemeSwitchView/>
    <MainView/>
    <SkillsView/>
    <Projects/>
    </ParentView>

    </div>
  );
}
