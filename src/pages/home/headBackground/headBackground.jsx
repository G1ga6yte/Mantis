import React from "react";
import "./headBackground.scss"
import leftSideImg from "./headLeftSide.png"
import rightSideImg from "./headRightSide.png"
import {useCartContext} from "../../../CartContext";

function HeadBackground (){
  const {bckSwitch, thirdBlockInView} = useCartContext()
  
  return(
     <div style={{position: thirdBlockInView ? "absolute" : "fixed"}} className="HeadBackground">
        <div
           className="leftSide"
           style={{
             backgroundImage: `url("${leftSideImg}")`,
             opacity: bckSwitch ? 0 : 1
           }}
        ></div>
       <div
          className="rightSide"
          style={{
            backgroundImage: `url("${rightSideImg}")`,
            opacity: bckSwitch ? 1 : 0
          }}
       ></div>
     </div>
  )
}

export default HeadBackground