'use client'
import { FiSun,FiMoon } from "react-icons/fi";
import { useEffect,useState } from "react";
import { useTheme } from "next-themes";
const ThemeSwitch=()=>{
    const [mounted,setMounted]=useState<boolean>(false)
    const {setTheme,resolvedTheme}=useTheme();
    useEffect(()=>{
        setMounted(true)
    },[])
    if(!mounted){
        return(
            <p>Not Mounted</p>
        )
    }
    if (resolvedTheme === 'dark') {
        return <FiSun onClick={() => setTheme('light')} size={22} />
      }
    
      if (resolvedTheme === 'light') {
        return <FiMoon onClick={() => setTheme('dark')}  size={22} />
      } 
}
export default ThemeSwitch