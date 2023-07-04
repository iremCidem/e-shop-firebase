import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Profile(){
  const navigate = useNavigate();
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [addres,setAddres] = useState();
    const auth = getAuth();
    function handleCreateUser(e){
      e.preventDefault();
      updateProfile(auth.currentUser, {
        phoneNumber: {phone}
      }).then(() => {
       // console.log(name,phone,addres);
       console.log(auth.currentUser)
      navigate("/");
      }).catch((error) => {
        alert(error);
        console.log(error)
      });
    }
    
    return (
        <div className="signin">
        <h2 className="sign-title">ShopZilla</h2>
        <div className="signin-box">
          <form className="sign-form" onSubmit={handleCreateUser} >
            <h2 className="sign">Lets create your profile</h2>
            <label>Name-Surname</label>
            <input
              className="sign input"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Phone</label>
            <input
              className="sign input"
              type="number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <label>Address</label>
            <input
              className="sign input"
              type="text"
              onChange={(e) => setAddres(e.target.value)}
            />
           <button className="btn btn-sign" >Create your account</button>
           
          </form>
          
        </div>
      </div>
    )
        
  
}