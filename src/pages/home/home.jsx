import React from "react";
import "./home.scss";
import HeadBlock from "./headBlock/headBlock";
import SecondBlock from "./secondBlock/secondBlock";
import ThirdBlock from "./thirdBlock/thirdBlock";
import ForthBlock from "./forthBlock/forthBlock";
import {useCartContext} from "../../CartContext";
import FifthBlock from "./fifthBlock/fifthBlock";
import FooterBlock from "./footerBlock/footerBlock";

function Home() {
  const {thirdBlock} = useCartContext()
  
  return (
     <div className="HomeCont">
       
       <HeadBlock/>
       <SecondBlock/>
       <div ref={thirdBlock}>
         <ThirdBlock/>
         <ForthBlock/>
         <FifthBlock/>
         <FooterBlock/>
       </div>
       
     </div>
  );
}

export default Home;