import React from "react";
import "./headBlock.scss";
import {useCartContext} from "../../../CartContext";
import LinkToPage from "../../../components/linkToPage/linkToPage";
import {Link} from "react-router-dom";
import UnderlinedLink from "../../../components/underlinedLink/underlinedLink";
import {Images} from "./images/images";

function HeadBlock() {
  const {bckSwitch, firstBlock} = useCartContext();
  
  
  return (
     <div className="HeadBlock no-select">
       
       <div ref={firstBlock} className="refBlock"></div>
       <div className={`leftSide ${bckSwitch ? "" : "activeSide"}`}>
         <div className="navBlock">
          <div className="navBlockInside">
            <Link className="navLink" to="/"><LinkToPage text={"Services"} /></Link>
            <Link className="navLink" to="/"><LinkToPage text={"nextfy agenc"} /></Link>
            <div className="flexGrow"></div>
            <Link className="navLink" to="/"><UnderlinedLink text={"about us"}/></Link>
            <p className="prgMantis">MAN</p>
          </div>
         </div>
         
         <div className="rowLines">
           <div className="rowLinesInside">
             <p className="linesText">product of fytechnology ltd</p>
             
             <p className="backText">design</p>
             <p className="backText">vr/ar</p>
             <p className="backText">we are digital agency</p>
             <p className="backText">ux/ui</p>

           </div>
         </div>
         
         <div className="headerBlock">
           <p className="header">MAN</p>
           <p className="underHeader">STU</p>
         </div>
       
       </div>
       
       <div className={`rightSide ${bckSwitch ? "activeSide" :""}`}>
         <div className="navBlock">
           <div className="navBlockInside">
             <p className="prgMantis">TIS
               <img src={Images.rightsImg} alt=""/>
             </p>
             <Link className="navLink" to="/"><UnderlinedLink text={"projects"}/></Link>
  
             <div className="flexGrow"></div>
  
             <Link className="navLink" to="/"><LinkToPage text={"contact"} /></Link>
             
           </div>
         </div>
  
         <div className="rowLines">
           <div className="rowLinesInside">
             <p className="backText2">blockchain</p>
             <p className="backText2">3d & motion</p>
             <p className="backText2">developing</p>
             <p className="backText2">we make good digital shit</p>
  
             <img src={Images.text1} className="textImg1" alt=""/>
             <img src={Images.text2} className="textImg2" alt=""/>
             <img src={Images.text3} className="textImg3" alt=""/>

           </div>
         </div>
  
         <div className="headerBlock">
           <p className="header">TIS
             <img src={Images.rightsImg} alt=""/>
           </p>
           <p className="underHeader">DIO</p>
         </div>
         
       
       </div>
     </div>
  );
}

export default HeadBlock;