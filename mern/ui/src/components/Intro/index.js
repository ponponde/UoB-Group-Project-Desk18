import React, { useState, useEffect } from "react";
import "./Intro.scss";
import logo_removebg from "../../img/logo_removebg.png";
import logoTxt_removebg from "../../img/logoTxt_removebg.png";
import logoSlide from "../../img/logoSlide.png";
import introSlide0 from "../../img/introSlide0.png";
import introSlide1 from "../../img/introSlide1.png";
import introSlide2 from "../../img/introSlide2.gif";
import introSlide3 from "../../img/introSlide3.gif";


import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const Intro = (props) => {
    const [showIntro, setShowIntro] = useState(true);
    const [showLogo, setShowLogo] = useState(true);
    const [showSlide, setShowSlide] = useState(false);

    

    const carouselRef = React.createRef();

    const handleNext = () => carouselRef.current.next();

    const handlePrev = () => carouselRef.current.prev();

    const {  } = props;
    return (
       <div className="Intro" data-testid="Intro" style={showIntro ? {visibility: "visible", opacity: 1 } : {visibility: "hidden", opacity: 0}}  >
           <div className="IntroLogo" style={showLogo ? {visibility: "visible", opacity: 1 } : {visibility: "hidden", opacity: 0}}>
                <img src={logo_removebg} data-testid="logo" className="logo" onClick={() => {setShowLogo(false);setShowSlide(true); }} />
                <img src={logoTxt_removebg} data-testid="logoTxt" className="logoTxt" onClick={() => {setShowLogo(false);setShowSlide(true); }} />
                <div><div className="btnText startText" data-testid="btnStart" onClick={() => {setShowIntro(false); setShowLogo(false); setShowSlide(false);}}>START</div></div>
                <div><div className="btnText tutorialText" data-testid="btnTutorial" onClick={() => {setShowLogo(false);setShowSlide(true); }}>TUTORIAL</div></div>
           </div>
           <div className="Slide" style={showSlide ? {visibility: "visible", opacity: 1 } : {visibility: "hidden", opacity: 0}}>
                <LeftOutlined className="iconLeft" onClick={handlePrev}  />     
                <Carousel ref={carouselRef}>
                    <div>
                        <img className="introSlide logoSlide" src={logoSlide}></img>
                        <div className="slideTextBox"><h1>COVIDSURVIVAL IS A PLATFORM FOR EVERYONE TO LEARNING THE INFROMATION OF COVID-19 AND SHARE YOUR THOUGHTS</h1></div>
                    </div>
                    <div>
                        <img className="introSlide introSlide0" src={introSlide0}></img>
                        <div className="slideTextBox"><h1>THE GLOBAL STATICS ARE SHOWN ON THE TOP LEFT OF THE PAGE</h1></div>
                    </div>
                    <div>
                        <img className="introSlide introSlide1" src={introSlide1}></img>
                        <div className="slideTextBox"><h1>ONE CLICK ON MAP FOR REAL-TIME OFFICIAL STATISTICS OF COVID-19</h1></div>
                    </div>
                    <div>
                        <img className="introSlide introSlide2" src={introSlide2}></img>
                        <div className="slideTextBox"><h1>FURTHER DETAILS OF TRAVEL POLICY AND NEWS ARE ON THE BOTTOM-LEFT OF THE PAGE</h1></div>
                    </div>
                    <div>
                        <img className="introSlide introSlide3" src={introSlide3}></img>
                        <div className="slideTextBox"><h1>AFTER SIGN-IN, YOU CAN ACCESS THE FORUM TO SHARE THE TIPS TO SURVIVE THE COVID</h1></div>
                    </div>
               </Carousel>
               <RightOutlined className="iconRight" onClick={handleNext}/>
               <div><div className="btnSkip" data-testid="btnSkip" onClick={() => {setShowIntro(false); setShowLogo(false); setShowSlide(false);}}>SKIP AND START</div></div>
           </div>
       </div>
    );
};

export default Intro;