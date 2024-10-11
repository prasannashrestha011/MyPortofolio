import MainView from "./ViewComponents/MainView";
import NavBar from "./ViewComponents/NavBar";
import ParentView from "./ViewComponents/ParentView";
import ThemeSwitchView from "./ViewComponents/ThemeSwitchView";



export default function Home() {
  return (
    <div >
   
    <ParentView>
    <NavBar />
    <ThemeSwitchView/>
    <MainView/>
    </ParentView>

    </div>
  );
}
