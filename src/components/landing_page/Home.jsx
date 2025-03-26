
import React, { useState } from "react";
import styled from "styled-components";
import HomeBlock3 from "./HomeBlock";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./Home.css";
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

  

  React.useEffect(() => {
    ref.current.continuousStart();
    setTimeout(() => ref.current.complete(), 500);
  }, []);

  return (
    // <BeforeHomePageStyled>
    <>
    {show?<Overlay />:show}
      <LoadingBar color="#08BD80" height="4px" ref={ref} />
      <div className="parent_head">
        <div className="header">
          <div className="navbar">
            {/* <img
              style={{ cursor: "pointer" }}
              src="public\Logo img.jpg"
              alt="logo"
            /> */}
           <img src="/Final Logo.jpg" alt="logo" />



            <button onClick={handleLogin} className="button">Login</button>
          </div>
          <div className="heading">
            <div className="head">
               Unlocking Solutions 
              <br />

              for Developers
            </div>
            <br />
 
            <div className="course">
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
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="block3">
              {block3adetails.map((el) => {
                return <HomeBlock3 {...el} />;
              })}
            </div>
            <br />
            <br />
            <br />
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
                    />
                  </a>
                </div>
              </div>
              <div className="block42">
                {/* <img
                  src="https://static.uacdn.net/production/_next/static/images/newApp.png?q=75&w=640"
                  alt="mobile"
                /> */}
              </div>
            </div>
             <div className="block5">
                        
                    </div>
          </div>
        </div>
        <Footer />
      </div> 
    </>
  );
}

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
export default Home;
