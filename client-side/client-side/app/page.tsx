import MainView from "./ViewComponents/Main/MainView";

import ParentView from "./ViewComponents/ParentView";

import ProjectView from "./ViewComponents/Project/ProjectView";
import SkillsView from "./ViewComponents/Skills/SkillsView";
import ThemeSwitchView from "./ViewComponents/ThemeSwitchView";



export default function Home() {
  return (
    <div >
   
    <ParentView>
   
    <ThemeSwitchView/>
    <MainView/>
    <SkillsView/>
    <ProjectView/>
    </ParentView>

    </div>
  );
}
