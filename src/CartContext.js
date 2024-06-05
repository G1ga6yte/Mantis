import React, {createContext, useContext, useEffect, useState} from "react";
import {useInView} from "react-intersection-observer";

const CartContext = createContext();
export const CartProvider = ({children}) => {
  
  /////////////home -> head -> background //////////////////
  const [bckSwitch, setBckSwitch] = useState(false) // state for background Image
  const [backgroundFixed, setBackgroundFixed] = useState(true)
  const {ref: firstBlock, inView: firstBlockInView} = useInView();
  const {ref: secondBlock, inView: secondBlockInView} = useInView();
  const {ref: thirdBlock, inView: thirdBlockInView} = useInView();
  
  useEffect(()=>{
    if (secondBlockInView){
      if (!bckSwitch){
        setBckSwitch(true)
      }
    } else {
      if (bckSwitch){
        setBckSwitch(false)
      }
    }
  }, [secondBlockInView, firstBlockInView])
  /////////////////////////////////////////////////end
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (<CartContext.Provider value={{
    bckSwitch, backgroundFixed, secondBlock, firstBlock,
    thirdBlock, thirdBlockInView
  }}>
    {children}
  </CartContext.Provider>);
};

export const useCartContext = () => {
  return useContext(CartContext);
};