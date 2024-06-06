import React from "react";
import "./footerBlock.scss"
import WordLetterScrolling from "./wordLetterScrolling/wordLetterScrolling";
import {Link} from "react-router-dom";
import {Images} from "./images/images";

function FooterBlock (){
  
  
  return(
     <div className="FooterBlock">
     
     <div className="mainCont">
       
       <div className="leftPrg">
         <span>lets make that</span>
         <span>*shit</span>
         <span>together</span>
       </div>
       
       
       <div className="headerBlock">
         <div className="header">
            <p className="headerPrg">man</p>
           <p className="headerPrg">tis</p>
           <img src={Images.rImg} className="rightsImg" alt=""/>
         </div>
       </div>
       
       
       <div className="linksCont">
         <div className="linksBlock">
           <a href="/" className="link"><WordLetterScrolling text={"Instagram"}/></a>
           <a href="/" className="link"><WordLetterScrolling text={"Twitter/X"}/></a>
           <a href="/" className="link"><WordLetterScrolling text={"Behance"}/></a>
           <a href="/" className="link"><WordLetterScrolling text={"LinkedIn"}/></a>
         </div>
  
         <div className="linksBlock">
           <Link to="/" className="link"><WordLetterScrolling text={"About us"}/></Link>
           <Link to="/" className="link"><WordLetterScrolling text={"Services"}/></Link>
           <Link to="/" className="link"><WordLetterScrolling text={"Projects"}/></Link>
           <Link to="/" className="link"><WordLetterScrolling text={"nextfy"}/></Link>

         </div>
       </div>
       
     </div>
       
       <div className="termsCont">
         <p className="prg">Copyright © 2021 Fytechnology LTD . All Rights Reserved.</p>
         <div className="termsLinksBlock">
           <Link to="/" className="prg">career</Link>
           <Link to="/" className="prg">Terms of Use</Link>
           <Link to="/" className="prg">Privacy Policy</Link>
         </div>
       </div>
     
     </div>
  )
}

export default FooterBlock