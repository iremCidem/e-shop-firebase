import React, { useContext, useState, useEffect } from "react";
import "./product.css";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import { productsContext } from "../Store/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Product({
  title,
  price,
  starNumber,
  img,
  content,
  id,
 
}) {
  const { dispatch } = useContext(productsContext);
  const [userUıd, setUserUid] = useState();
  function addToStorage() {
    let localStorageValue = localStorage.getItem(userUıd);
    let newArray;
    if (!localStorageValue) {
      newArray = [];
    } else {
      newArray = JSON.parse(localStorageValue);
    }
    let valueToAdd = {
      title: title,
      price: price,
      starNumber: starNumber,
      img: img,
      content: content,
      id: id,
    };
    newArray.push(valueToAdd);
    localStorage.setItem(userUıd, JSON.stringify(newArray));
  }
  function handleAddProduct() {
    dispatch({
      type: "addProduct",
      item: {
        title: title,
        price: price,
        starNumber: starNumber,
        img: img,
        content: content,
        id: id,
      },
    });
    addToStorage();
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

  return (
    <div key={id} className="card">
      <h2 className="title">{title}</h2>
      <p>{content}</p>
      <p>${price}</p>
      <div className="stars">
        {Array(starNumber)
          .fill()
          .map((_, i) => (
            <span>
              <StarBorderPurple500Icon className="star" />
            </span>
          ))}
      </div>
      <div className="img">
        <img src={img} alt="product" className="product-image" />
        <div>
          <button className="btn addButton" onClick={handleAddProduct}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
