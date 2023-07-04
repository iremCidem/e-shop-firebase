import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCslQUXftjXUTdMIUS114BDmJsT_nt6uKU",
  authDomain: "eshop-983c7.firebaseapp.com",
  projectId: "eshop-983c7",
  storageBucket: "eshop-983c7.appspot.com",
  messagingSenderId: "11084558919",
  appId: "1:11084558919:web:eb6e3c88cd0667f15d3762",
  measurementId: "G-R8DV0J1DY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);