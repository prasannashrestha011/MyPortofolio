"use client"
import React,{useEffect,useRef} from 'react'
import {motion,useInView,useAnimation} from 'framer-motion'
interface Props{
 children:JSX.Element
 width?:"fit-content"|"100%";
 revealColor?:string;
}
const RevealMotion = ({children,revealColor="#082947"}:Props) => {
    const ref=useRef(null)
    const isInView=useInView(ref,{once:true})
    const mainControl=useAnimation()
    const slideControl=useAnimation()
    useEffect(()=>{
        if(isInView){
            mainControl.start("visible")
            slideControl.start("visible")
        }
    },[isInView])
  return (
    <div ref={ref} style={{position:"relative",overflow:"hidden"}}>
      <motion.div
      variants={{
        hidden:{opacity:0,y:75},
        visible:{opacity:1,y:0}
      }}
      initial="hidden"
      animate={mainControl}
      transition={{duration:0.5,delay:0.4}}
      
      >
        {children}
      </motion.div>
      <motion.div
       variants={{
        hidden:{left:0},
        visible:{left:"100%"}
       }}
       initial="hidden"
       animate={slideControl}
       transition={{duration:0.5,ease:"easeIn"}}
       style={{
        position:'absolute',
        top:4,
        bottom:4,
        left:0,
        right:0,
        background:revealColor,
     
       }}
      >

      </motion.div>
    </div>
  )
}
const RevealMotionBottom = ({children,width,revealColor="#082947"}:Props) => {
  const ref=useRef(null)
  const isInView=useInView(ref,{once:true})
  const mainControl=useAnimation()
  const slideControl=useAnimation()
  useEffect(()=>{
      if(isInView){
          mainControl.start("visible")
          slideControl.start("visible")
      }
  },[isInView])
return (
  <div ref={ref} style={{position:"relative",width,overflow:"hidden"}}>
    <motion.div
    variants={{
      hidden:{opacity:0,y:75},
      visible:{opacity:1,y:0}
    }}
    initial="hidden"
    animate={mainControl}
    transition={{duration:0.5,delay:0.4}}
    
    >
      {children}
    </motion.div>
    <motion.div
     variants={{
      hidden:{bottom:0},
      visible:{bottom:"100%"}
     }}
     initial="hidden"
     animate={slideControl}
     transition={{duration:0.5,ease:"easeIn"}}
     style={{
      position:'absolute',
      top:4,
      bottom:4,
      left:0,
      right:0,
      background:revealColor,
      zIndex:20
     }}
    >

    </motion.div>
  </div>
)
}
const RevealMotionWithoutLine = ({children,width}:Props) => {
    const ref=useRef(null)
    const isInView=useInView(ref,{once:true})
    const mainControl=useAnimation()
    const slideControl=useAnimation()
    useEffect(()=>{
        if(isInView){
            mainControl.start("visible")
            slideControl.start("visible")
        }
    },[isInView])
  return (
    <div ref={ref} style={{position:"relative",width,overflow:"hidden"}}>
      <motion.div
      variants={{
        hidden:{opacity:0,y:75},
        visible:{opacity:1,y:0}
      }}
      initial="hidden"
      animate={mainControl}
      transition={{duration:0.5,delay:0.3}}
      
      >
        {children}
      </motion.div>
      
    </div>
  )
}
export  {RevealMotion,RevealMotionWithoutLine,RevealMotionBottom}
