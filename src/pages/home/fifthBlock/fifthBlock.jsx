import React from "react";
import "./fifthBlock.scss"
import {Images} from "./images/images";
import {useInView} from "react-intersection-observer";

function FifthBlock (){
  
  const {ref: images, inView: imagesInView} = useInView();
  
  return(
     <div className="FifthBlock">
        <div ref={images} className={`imagesCont ${imagesInView ? "activeImagesCont" : ""}`}>
  
          <img src={Images.cubImage} className="cubImg" alt=""/>
  
          <img src={Images.image1} className="image image1" alt=""/>
          <img src={Images.image2} className="image image2" alt=""/>
          <img src={Images.image3} className="image image3" alt=""/>
          <img src={Images.image4} className="image image4" alt=""/>
          <img src={Images.image5} className="image image5" alt=""/>
          <img src={Images.image6} className="image image6" alt=""/>
          <img src={Images.image7} className="image image7" alt=""/>
          
          <p className="textBlock">
            lets make
            a good *shit
          </p>
          
          <div className="headerBlock">
            <p className="header">( CONTACT )</p>
            <div className="line1"></div>
            <div className="line2"></div>
          </div>

        </div>
     </div>
  )
}

export default FifthBlock