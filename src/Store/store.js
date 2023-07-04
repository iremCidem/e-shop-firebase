import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
import { useEffect } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase"

export const productsContext = createContext([]);
const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const basket = JSON.parse(localStorage.getItem(uid)) || [];
        dispatch({ type: "INITIALIZE", payload: basket });
      }
else{
  const basket = [];
  dispatch({ type: "INITIALIZE", payload: basket });
} });

    return () => unsubscribe();
  }, []);

  const value = { state, dispatch };
 
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};


export default Store;


