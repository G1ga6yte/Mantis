import React from "react";

function WordLetterScrolling ({text}){
  let arr = text.split("")
  return(
     <div className="wordBlock">
       <div className="line">
         {arr.map((el, index)=>{
           let trs = (index+1)*0.1
           return(
              <div style={{
                transition: `${trs}s ease-in-out all`
              }} className="letter" key={index}>{el}</div>
           )
         })}
       </div>
       <div className="line line2">
         {arr.map((el, index)=>{
           let trs = (index+1)*0.1
           return(
              <div style={{
                transition: `${trs}s ease-in-out all`
              }} className="letter letter2" key={index}>{el}</div>
           )
         })}
       </div>
     </div>
  )
}

export default WordLetterScrolling