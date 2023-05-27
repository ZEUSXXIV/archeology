import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Login.css";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const SignUp = () => {
  const auth = getAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    console.log("sadly its working",auth, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user=>", user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("err", error)
        // ..
      });
  };

  return (
    <div class="login-box">
      <p>SignUp</p>
      <form>
      <div class="user-box">
          <input
            required=""
            name=""
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>
        <div class="user-box">
          <input
            required=""
            name=""
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input
            required=""
            name=""
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <a href="#" onClick={() => signIn()}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
      <p>
        Already have an account?{" "}
        <a href="" class="a2">
          Login!
        </a>
      </p>
      {/* <button onClick={()=>{ 
        console.log("email==>>", email)
        console.log("password==>>", password)
        }}>click me</button> */}
    </div>
  );
};

export default SignUp;
