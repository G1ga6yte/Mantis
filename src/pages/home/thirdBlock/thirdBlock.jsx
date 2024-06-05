import React from "react";
import "./thirdBlock.scss"
import CircleCont from "./circleCont/circleCont";
import {Images} from "./images/images";

function ThirdBlock () {
  
  
  return(
     <div className="ThirdBlock">
       
       <div className="headerBlock">
         <p className="header">( our futured project )</p>
         <p className="underHeader">ur case can be here</p>
       </div>
       
       
  
       <div className="circleCont circleCont1">
         <img src={Images.text1} className="textImgSlide" alt=""/>
        <CircleCont color={"#B5CDB7"} mainImg={Images.Project1Img} overHeader={"2*23"} projectName={"orbix"} count={1}/>
       </div>
  
       <div className="circleCont circleCont2">
         <div className="circle"><CircleCont color={"#BCF809"} mainImg={Images.Project3Img} overHeader={"2*24"} projectName={"quantic"} count={3}/></div>
         <div className="circle"><CircleCont color={"#7B77C9"} mainImg={Images.Project2Img} overHeader={"2*24"} projectName={"givehub"} count={2}/></div>
         <img src={Images.text1} className="textImgSlide" alt=""/>
         <p className="projectText text1">that can be your shit</p>
         <p className="projectText text2">we can make better collaboration</p>
       </div>
  
       <div className="circleCont circleCont3">
         <p className="projectText text3">wa are  part  of fytechnology ltd</p>
         <img src={Images.text1} className="textImgSlide" alt=""/>
         <CircleCont color={"#FF6512"} mainImg={Images.Project4Img} overHeader={"2*24"} projectName={"Bright"} count={4}/>
       </div>
  
       <div className="line1"></div>
       <div className="line2"></div>
     
     
     </div>
  )
}

export default ThirdBlock