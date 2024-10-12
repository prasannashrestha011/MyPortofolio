import MainView from "./ViewComponents/MainView";
import NavBar from "./ViewComponents/NavBar";
import ParentView from "./ViewComponents/ParentView";
import Projects from "./ViewComponents/Projects";
import SkillsView from "./ViewComponents/SkillsView";
import ThemeSwitchView from "./ViewComponents/ThemeSwitchView";



export default function Home() {
  return (
    <div >
   
    <ParentView>
    <NavBar />
    <ThemeSwitchView/>
    <MainView/>
    <SkillsView/>
    <Projects/>
    </ParentView>

    </div>
  );
}
