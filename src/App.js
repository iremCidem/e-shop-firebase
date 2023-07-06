import Header from "./Header/Header";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Basket from "./Basket/Basket";
import Store from "./Store/store"
import SignIn from "./Signin/signIn";



function App() {
  return (
    <Store> 
       <div className="App">
       
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/your_cart" element={<Basket />} />
        <Route path="/sign_in" element={<SignIn />} />
      
      </Routes>
     
   
    </div>
    </Store>
   
  );
}

export default App;
