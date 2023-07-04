import React, { useContext } from "react";
import "./basket.css";
import BasketItem from "../BasketItem/BasketItem";
import { productsContext } from "../Store/store";
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { useState, useEffect } from "react";

export default function Basket() {
  const [userUıd, setUserUid] = useState();
  const { state,dispatch } = useContext(productsContext);
  const totalValue = state
    .reduce((sum, item) => sum + item.price, 0)
    .toFixed(2);
    useEffect(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          setUserUid(uid);
        }
      });
    }, []);

 function handleClearBasket(){
dispatch({
  type:"CLEAR_BASKET",
})
localStorage.removeItem(userUıd)
 }
  return (
    <div>
      <div className="container-cart">
        <div className="container-left">
          <h2>Your Shopping Basket</h2>
        </div>
        <div className="container-right">
          <p>
            Subtotal ({state.length} items) : ${totalValue}
          </p>
          <div className="giftbtn">
            {" "}
            <input type="checkbox" /> This order contains a gift{" "}
          </div>

          <button className="btn" onClick={handleClearBasket}>Proceed to Checkout</button>
        </div>
        <div className="container-products">
          {state.map((item) => {
            return (
              <BasketItem
                id={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                starNumber={item.starNumber}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
