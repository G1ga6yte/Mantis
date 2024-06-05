import React from "react";
import "./underlinedLink.scss"

function UnderlinedLink ({text}){
  let arr = text.split("")
  
  return(
     <div className="UnderlinedLink">
       <div className="textLine">
         {arr.map((el, index)=>{
           let trs = (index+1)*0.1
           return(
              <span style={{transition: `${trs}s ease-in-out all`}} className="letter" key={index}>{el}</span>
           )
         })}
       </div>
  
       <div className="textLine textLine2">
         {arr.map((el, index)=>{
           let trs = (index+1)*0.1
           return(
              <span style={{transition: `${trs}s ease-in-out all`}} className="letter" key={index}>{el}</span>
           )
         })}
       </div>
     </div>
  )
}

export default UnderlinedLink