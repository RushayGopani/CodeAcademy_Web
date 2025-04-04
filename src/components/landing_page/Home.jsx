<<<<<<< HEAD

import React, { useState } from "react";
import styled from "styled-components";
import HomeBlock3 from "./HomeBlock";
=======
import React, { useState, useEffect } from "react";
import styled from "styled-components";
>>>>>>> e28cf6b (Added remaining files)
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./Home.css";
<<<<<<< HEAD
import { Overlay } from "../Login/Overlay";
import { useDispatch } from "react-redux";
import { showSide } from "../../store/action";
import { useSelector } from "react-redux";

function Home() {
  const ref = React.useRef(null);

// const [show,setShow]=useState(false)
const {show} =useSelector((state)=>({show:state.show}))
const dispatch = useDispatch()

  const handleLogin=()=>{
    dispatch(showSide(!show))
    console.log(show);
    // setShow(!show)
  }

  
=======
import Login from "../Login/Login";
import { useDispatch } from "react-redux";
import { showSide } from "../../store/action";
import { useSelector } from "react-redux";
import { auth } from "../utils/Config";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Home() {
  const ref = React.useRef(null);
  const {show} = useSelector((state)=>({show:state.show}))
  const dispatch = useDispatch()
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userPhone, setUserPhone] = useState('');

  useEffect(() => {
    // Check authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setUserPhone(user.phoneNumber);
      } else {
        setIsAuthenticated(false);
        setUserPhone('');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    dispatch(showSide(!show))
  }

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      setUserPhone('');
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('userPhone');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }
>>>>>>> e28cf6b (Added remaining files)

  React.useEffect(() => {
    ref.current.continuousStart();
    setTimeout(() => ref.current.complete(), 500);
  }, []);

  return (
<<<<<<< HEAD
    // <BeforeHomePageStyled>
    <>
    {show?<Overlay />:show}
=======
    <>
    {show && <Login />}
>>>>>>> e28cf6b (Added remaining files)
      <LoadingBar color="#08BD80" height="4px" ref={ref} />
      <div className="parent_head">
        <div className="header">
          <div className="navbar">
<<<<<<< HEAD
            {/* <img
              style={{ cursor: "pointer" }}
              src="public\Logo img.jpg"
              alt="logo"
            /> */}
           <img src="/Final Logo.jpg" alt="logo" />



            <button onClick={handleLogin} className="button">Login</button>
=======
            <img src="/Final Logo.jpg" alt="logo" />
            {isAuthenticated ? (
              <div className="auth-buttons">
                <span className="user-phone">{userPhone}</span>
                <button onClick={handleLogout} className="button">Logout</button>
              </div>
            ) : (
              <button onClick={handleLogin} className="button">Login</button>
            )}
>>>>>>> e28cf6b (Added remaining files)
          </div>
          <div className="heading">
            <div className="head">
               Unlocking Solutions 
              <br />
<<<<<<< HEAD

=======
>>>>>>> e28cf6b (Added remaining files)
              for Developers
            </div>
            <br />
 
            <div className="course">
<<<<<<< HEAD
              <div className="course1">
                <img
                  src="/Sol & Ques image.jpg"
                  alt="doll"
                />
                <div className="line1">Solution</div>
                <div className="line2">For Your Problem</div>
                {/* <div className="line3">Popular Solution</div> */}
                {/* <div className="line4">
                  <div>UPSC CSE - GS</div>
                  <div>IIT JEE</div>
                  <div>NEET UG</div>
                  <div>Bank Exams</div>
                </div>
                <div className="line5">
                  <div>{"GATE & ESE"}</div>
                  <div>UPSC CSE - Optional</div>
                </div> */}
                <Link to="/explore">
                  <button>Start Learning</button>
                </Link>
              </div>
              <div className="course2">
                <img
                  src="/Hor.jpg"
                  alt="doll"
                />
                <div className="line1">SolveShare</div>
                <div className="line2">& Get Paid</div>
                <div className="line3"></div>
                {/* <div className="line4">
                  <div>CBSE</div>
                  <div>Maharashtra Board</div>
                  <div>Uttar Pradesh Board</div>
                </div>
                <div className="line5">
                  <div>Uttar Pradesh Board</div>
                </div> */}
                <Link to="/explore">
                  <button>Start Earning</button>
                </Link>
              </div>
              
              <div className="course3">
                <img
                  src="/Hor.jpg"
                  alt="doll"
                />
                <div className="line1">Can't Find Helper! </div>
                <div className="line2">Don't Worry Your CodeBot is Here!</div>
                <div className="line3"></div>
                {/* <div className="line4">
                  <div>CBSE</div>
                  <div>Maharashtra Board</div>
                  <div>Uttar Pradesh Board</div>
                </div>
                <div className="line5">
                  <div>Uttar Pradesh Board</div>
                </div> */}
                <Link to="/explore">
                  <button>CodeBot</button>
                </Link>
=======
              <div className="course-card">
                <div className="card-content">
                  <h2 className="card-title">Solution</h2>
                  <h3 className="card-subtitle">For Your Problem</h3>
                  <Link to="/qa-platform">
                    <button className="card-button">Start Learning</button>
                  </Link>
                </div>
                <div className="card-image">
                  <img
                    src="/Sol & Ques image.jpg"
                    alt="Solution mascot"
                    className="mascot-image"
                  />
                </div>
              </div>
              
              <div className="course-card">
                <div className="card-content">
                  <h2 className="card-title">Can't Find Helper!</h2>
                  <h3 className="card-subtitle">Don't Worry Your CodeBot is Here!</h3>
                  <Link to="/chatbot">
                    <button className="card-button">CodeBot</button>
                  </Link>
                </div>
                <div className="card-image">
                  <img
                    src="/ChatBot1.jpg"
                    alt="CodeBot assistant"
                    className="bot-image"
                  />
                </div>
>>>>>>> e28cf6b (Added remaining files)
              </div>
            </div>
            <br />
            <br />
            <br />
<<<<<<< HEAD
            <div className="block3">
              {block3adetails.map((el) => {
                return <HomeBlock3 {...el} />;
              })}
            </div>
            <br />
            <br />
            <br />
=======
            
>>>>>>> e28cf6b (Added remaining files)
            <div className="block4">
              <div className="block41">
                <div className="block411">
                  Get the Solving 
                  <br /> App
                </div>
                <div className="block412">
                  Solve and Earn anytime,
                  <br /> anywhere with the CodeAcademy app
                </div>
                <div className="block413">
<<<<<<< HEAD
                  <a href="https://apps.apple.com/in/app/instagram/id389801252">
                    <img
                      src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=1920"
                      alt="playstore"
                    />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.instagram.android">
                    <img
                      src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=1920"
                      alt="playstore"
=======
                  <a href="https://www.instagram.com/">
                    <img
                      src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=1920"
                      alt="Instagram App Store"
                    />
                  </a>
                  <a href="https://www.instagram.com/">
                    <img
                      src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=1920"
                      alt="Instagram Play Store"
>>>>>>> e28cf6b (Added remaining files)
                    />
                  </a>
                </div>
              </div>
              <div className="block42">
<<<<<<< HEAD
                {/* <img
                  src="https://static.uacdn.net/production/_next/static/images/newApp.png?q=75&w=640"
                  alt="mobile"
                /> */}
              </div>
            </div>
             <div className="block5">
                        
                    </div>
=======
              </div>
            </div>
>>>>>>> e28cf6b (Added remaining files)
          </div>
        </div>
        <Footer />
      </div> 
    </>
  );
}

<<<<<<< HEAD
const block3adetails = [
  {
    id: "b31",
    title: "Live Interaction",
    image:
      "\Live.png",
    discription:
      "Chat with coders, ask questions and get your doubts cleared - all face to face",
  },
  {
    id: "b32",
    title: "Can't Find Helper! Use CodeBot",
    
    image:
      "\ChatBot1.jpg",
    discription:
      "Don't Worry Your CodeBot is Here!",
  },
  // {
  //   id: "b33",
    
  //   title: "Learn anytime, anywhere",
  //   image:
  //     "https://static.uacdn.net/web-cms/learnanytimeanywhere_cb19d5de30_b92bc0c6a1.svg?q=75&w=384",
  //   discription:
  //     "One subscription gets you access to all our live and recorded classes to watch from the comfort of any of your devices Get the learning",
  // },
]; 
=======
>>>>>>> e28cf6b (Added remaining files)
export default Home;
