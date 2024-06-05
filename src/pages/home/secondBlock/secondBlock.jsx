import React from "react";
import "./secodBlock.scss"
import {useCartContext} from "../../../CartContext";
import HeadBackground from "../headBackground/headBackground";

function SecondBlock (){
  const {bckSwitch, secondBlock} = useCartContext();
  
  return(
     <div  className="SecondBlock">
  
       <HeadBackground/>
       
       <div ref={secondBlock} className="refBlock"></div>
       <div className={`leftSide ${bckSwitch ? "" : "activeSide"}`}>
       
         <p className="header">( MANTIS )</p>
         
         <div className="prg1">
           <p className="prg">we help our partners solve</p>
           <p className="prg">for today while building</p>
           <p className="prg">towards tomorrow</p>
         </div>
  
         <div className="prg2">
           <p className="prg">We achieve the results you need,</p>
           <p className="prg">regardless of the size of</p>
           <p className="prg">the business</p>
         </div>
  
         <div className="prg3">
           <p className="prg">we are Asian - European born </p>
           <p className="prg">digital and creative agency </p>
         </div>
         
         
         <div className="endBlock">
           <div className="textAnim">
             <div className="textAnimLine">Digital</div>
             <div className="textAnimLine">Agency</div>
             <div className="textAnimLine">made</div>
             <div className="textAnimLine filled">easy</div>
           </div>
           
           <p className="turnedPrg">every client is important for us</p>
           
           
         </div>
       
       </div>
  
       <div className={`rightSide ${bckSwitch ? "activeSide" :""}`}></div>
     </div>
  )
}

export default SecondBlock