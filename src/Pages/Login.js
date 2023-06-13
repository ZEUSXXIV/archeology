import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";


const firebaseConfig = {
  apiKey: "AIzaSyD3Ud0FCzdMKHtM1fJgiuwE_Gei4QoGGhQ",
  authDomain: "archaeology-25b01.firebaseapp.com",
  projectId: "archaeology-25b01",
  storageBucket: "archaeology-25b01.appspot.com",
  messagingSenderId: "93770748224",
  appId: "1:93770748224:web:cc5a6dc668f58a9e89eaa5",
  measurementId: "G-09TSHY0JD0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const Login = () => {


  const auth = getAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    console.log("sadly its working", email, password)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user==>>", user);

        const token = user.accessToken;
        const user_id = user.uid;
        if (!token) {
            alert('Unable to login. Please try after some time.');
            return;
        }
        localStorage.clear();
        localStorage.setItem('user-token', token);
        setTimeout(() => {
            navigate('/');
        }, 500);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("err==>>", error)
      });
  };

  return (
    <div class="login-box">
      <p>Login</p>
      <form>
        <div class="user-box">
          <input required="" name="" type="text" onChange={(e)=> setEmail(e.target.value)} />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input required="" name="" type="password" onChange={(e)=> setPassword(e.target.value)} />
          <label>Password</label>
        </div>
        <a href="#" onClick={()=> signIn()} >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="./signup" class="a2">
          Sign up!
        </a>
      </p>
      {/* <button onClick={()=>{ 
        console.log("email==>>", email)
        console.log("password==>>", password)
        }}>click me</button> */}
    </div>
  );
};

export default Login;
