import React from "react";
import "./circleCont.scss"
import {useInView} from "react-intersection-observer";

function CircleCont ({color, projectName, overHeader, mainImg, count}){
  const {ref: circleRef, inView: circleInView} = useInView();
  
  
  
  return(
     <div ref={circleRef} style={{
       transform: count===1 || count===3 ? circleInView ? "translateX(0) rotate(0deg)" : "translateX(-100%) rotate(180deg)" : count===2 || count===4 ? circleInView ? "translateX(0) rotate(0deg)" : "translateX(100%) rotate(-180deg)" : "translateX(0) rotate(0deg)",
       opacity: circleInView ? 1 : 0
     }} className="CircleCont">
  
       <svg style={{
         transform: circleInView ? "translate(0, 0)" : "translate(-400px, 400px)"
       }} className="svgArrow" xmlns="http://www.w3.org/2000/svg" width="57" height="57" viewBox="0 0 57 57" fill="none">
         <path d="M4 53L52 5M52 5V41.7059M62 5H10.5243" stroke={color} strokeWidth="10"/>
       </svg>
       
      <div style={{
        borderColor: count !== 4 ? color : "#dedede"
      }} className="circleBlock">
      
      <p className="overText">{overHeader}</p>
      <p className="overText">{projectName}</p>
      
      <div className="backgroundBlock">
        <div style={{backgroundImage: `url("${mainImg}")`}} className="circleImg"></div>
      </div>
        
        <div className="underText">
          <p className="overText">ui/ux design</p>
          <p className="overText">developing</p>
          <p className="overText">branding</p>

        </div>


      </div>
     
     
     </div>
  )
}

export default CircleCont