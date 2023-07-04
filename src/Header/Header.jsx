import React, { useContext } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { productsContext } from "../Store/store.js";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";

export default function Header() {
  const { state } = useContext(productsContext);
  const [user, setUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(auth.currentUser);
      }
    });
  }, []);
  function handleSignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  

  return (
    <div className="header">
      <Link to="/" className="header-left link">
        <div className="icon">
          <AccountBalanceOutlinedIcon />
        </div>
        <div className="title">ShopZilla</div>
      </Link>

      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          height: "1.8rem",
          ml: 2,
          mr: 2,
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search"  />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search" >
          <SearchIcon sx={{ color: "#ffb5b5" }}/>
        </IconButton>
      </Paper>

      <div className="header-right">
        {!user ? (
          <Link to="/sign_in" className="sign-in icon link">
            Sign in{" "}
          </Link>
        ) : (
          <button className="signout" onClick={handleSignOut}>
            Hello Guest <div>Sign Out</div>
          </button>
        )}
        <Link to="/your_cart" className="icon link">
          <ShoppingBasketOutlinedIcon />
          <span>{state.length}</span>
        </Link>
      </div>
    </div>
  );
}
