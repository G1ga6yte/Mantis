import React from "react";
import "./linkToPage.scss"

function LinkToPage ({text}){
  let arr = text.split("")
  
  return(
     <div className="LinkToPage">
       <div className="textLine">
         <span className="space">(</span>
         {arr.map((el, index)=>{
           let trs = (index+1)*0.1
           return(
              <span style={{transition: `${trs}s ease-in-out all`}} className="letter" key={index}>{el}</span>
           )
         })}
         <span className="space endSpace">)</span>
       </div>
  
       <div className="textLine textLine2">
         <span className="space">(</span>
         {arr.map((el, index)=>{
           let trs = (index+1)*0.1
           return(
              <span style={{transition: `${trs}s ease-in-out all`}} className="letter" key={index}>{el}</span>
           )
         })}
         <span className="space endSpace">)</span>
       </div>
       
     </div>
  )
}

export default LinkToPage