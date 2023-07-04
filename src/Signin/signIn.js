import { useState } from "react";
import "./signIn.css";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => { 
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  function handleChangeMail(e) {
    setEmail(e.target.value);
  }
  function handleChangePas(e) {
    setPassword(e.target.value);
  }
  function handleCreateUser() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {    
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
    <div className="signin">
      <h2 className="sign-title">ShopZilla</h2>
      <div className="signin-box">
        <form className="sign-form" onSubmit={handleSubmit}>
          <h2 className="sign">Sign in or Create</h2>
          <label>Email</label>
          <input
            className="sign input"
            type="email"
            onChange={handleChangeMail}
          />
          <label>Password</label>
          <input
            className="sign input"
            type="text"
            onChange={handleChangePas}
          />
          <button className="sign btn btn-sign">Sign in</button>
          <p className="sign">
            s simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book.{" "}
          </p>
        </form>
        <button className="btn-create" onClick={handleCreateUser}>
          Create your account
        </button>
      </div>
    </div>
  );
}
