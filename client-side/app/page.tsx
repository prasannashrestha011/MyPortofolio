import MainView from "./ViewComponents/MainView";
import NavBar from "./ViewComponents/NavBar";
import ThemeSwitchView from "./ViewComponents/ThemeSwitchView";



export default function Home() {
  return (
    <div >
   
    <NavBar />
    <ThemeSwitchView/>
    <MainView/>

    </div>
  );
}
