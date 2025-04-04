<<<<<<< HEAD
import logo from "./logo.svg";
=======
import React from 'react';
>>>>>>> e28cf6b (Added remaining files)
import "./App.css";
import { Explore } from "./components/Explore/Explore";
import { Goal } from "./components/Goal/Goal";
import { Routes, Route } from "react-router-dom";
import Home from "./components/landing_page/Home";
import Payment from "./components/payment/payment";
import { Tutor } from "./components/tutor_page/Tutor";
import LiveClass from "./components/Live/LiveClass";
<<<<<<< HEAD
=======
import ChatBot from "./components/ChatBot/ChatBot";
import QAPlatform from "./components/QAPlatform/QAPlatform";
>>>>>>> e28cf6b (Added remaining files)
// import{getDatabase, ref , set} from "firebase/database";
// import{app} from ".utils/Config.jsx";

// const db = getDatabase(app); 
 
function App() {
  // const putData = ()=>{
  //   set(ref(db,"users/rushay"),{
  //     id:1,
  //     name:rushay,
  //     age:19,
  //   })
  // }
  return (
    <div className="App">
      {/* <button onClick={putData}>PutData</button> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/goal" element={<Goal />}></Route>
        <Route path="/goal/tutor/:name" element={<Tutor />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/live" element={<LiveClass />}></Route>
<<<<<<< HEAD

=======
        <Route path="/chatbot" element={<ChatBot />}></Route>
        <Route path="/qa-platform" element={<QAPlatform />}></Route>
>>>>>>> e28cf6b (Added remaining files)
      </Routes>
    </div>
  );
}

export default App;
