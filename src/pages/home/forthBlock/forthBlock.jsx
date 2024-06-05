import React from "react";
import "./forthBlock.scss";
import {Images} from "./images/images";

function ForthBlock() {
  const servicesData = [
    {
      name: "branding",
    },
    {
      name: "developing",
    },
    {
      name: "3d & motion",
    },
    {
      name: "web 3.0 & blockchain",
    },
    {
      name: "vr & ar",
    },
    {
      name: "consultation & audit",
    },
    {
      name: "testing",
    },
  ];
  
  return (
     <div className="ForthBlock no-select">
       
       <div className="leftSide">
         <div className="headerBlock">
           <p className="header">( services )</p>
           
           <button className="projectsBtn">
             see all projects
             
             <div className="arrowBlock">
               see all projects
               <img src={Images.arrowUp} alt=""/>
               <img className="nextArrow" src={Images.arrowUp} alt=""/>
             </div>
           </button>
         
         </div>
         <p className="centerText">draw success story *</p>
         
         <div className="halfTextBlock">
          <span>if you want m</span>
           <span>*shit drop us </span>
         </div>
         
         <div className="servicesCont">
           {servicesData.map((el, index) => {
             return (
                <div key={index} className="service">
                  <p className="servicePrg">{el.name}</p>
                  <p className="servicePrg">( {index + 1} )</p>
                </div>
             );
           })}
         </div>
       
       
       </div>
       
       
       <div style={{backgroundImage: `url("${Images.rightSideImg}")`}} className="rightSide">
         <div className="halfTextBlock">
           <span>ake good</span>
           <span> a line</span>
         </div>
       </div>
     
     </div>
  );
}

export default ForthBlock;