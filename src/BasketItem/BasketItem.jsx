import React, { useContext } from "react";
import "./basketItem.css";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import { productsContext } from "../Store/store";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { useState, useEffect } from "react";

export default function BasketItem({
  title,
  price,
  starNumber,
  img,
  content,
  id,
 
}) {
  const [userUıd, setUserUid] = useState();
  const { dispatch } = useContext(productsContext);
  function handleRemoveProduct(id) {
    dispatch({
      type: "removeProduct",
      id: id,
    });
    removeFromStorage(id)
  }
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserUid(uid);
       
      }
    });
  }, []);
  function removeFromStorage(id) {
 let oldArray = JSON.parse(localStorage.getItem(userUıd));
 let newArray = oldArray.filter((item) =>  {
  return item.id !== id });
  localStorage.setItem(userUıd, JSON.stringify(newArray))
 
  }
  return (
    <div className="basket-item">
      <div className="product-left">
        <h3>{title}</h3>
        <img src={img} alt="product" width="150px" />
      </div>
      <div className="product-right">
        <p>{content} </p>
        <p>${price} </p>
        <div>
          {" "}
          {Array(starNumber)
            .fill()
            .map((_, i) => {
              return (
                <span>
                  <StarBorderPurple500Icon />
                </span>
              );
            })}{" "}
        </div>

        <button className="btn" onClick={() => handleRemoveProduct(id)}>
          remove from basket
        </button>
      </div>
    </div>
  );
}
