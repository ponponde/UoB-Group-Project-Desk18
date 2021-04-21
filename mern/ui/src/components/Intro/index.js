import React, { useState } from "react";
import "./Intro.scss";
import logo_removebg from "../../img/logo_removebg.png";
import logoTxt_removebg from "../../img/logoTxt_removebg.png";
import GB from "../../img/GB.png";
import GBtext from "../../img/GB_text.png";
import introSlide1 from "../../img/introSlide1.png";

import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from "react-redux";
import * as fetch from "../../utils/fetch";

const Intro = (props) => {
    const [showIntro, setShowIntro] = useState(true);
    const [showLogo, setShowLogo] = useState(true);
    const [showSlide, setShowSlide] = useState(false);

    const carouselRef = React.createRef();

    const handleNext = () => carouselRef.current.next();

    const handlePrev = () => carouselRef.current.prev();

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    const { visible } = props;
    return (
       <div className="Intro" style={showIntro ? {visibility: "visible", opacity: 1 } : {visibility: "hidden", opacity: 0}}  >
           <div className="IntroLogo" style={showLogo ? {visibility: "visible", opacity: 1 } : {visibility: "hidden", opacity: 0}}>
                <img src={logo_removebg} className="logo" onClick={() => {setShowIntro(false); setShowLogo(false); setShowSlide(false)}} />
                <img src={logoTxt_removebg} className="logoTxt" onClick={() => {setShowIntro(false); setShowLogo(false); setShowSlide(false)}} />
                <div><div className="btnText startText" onClick={() => {setShowIntro(false); setShowLogo(false); setShowSlide(false)}}>START</div></div>
                <div><div className="btnText tutorialText" onClick={() => {setShowLogo(false);setShowSlide(true); }}>TUTORIAL</div></div>
           </div>
           <div className="Slide" style={showSlide ? {visibility: "visible", opacity: 1 } : {visibility: "hidden", opacity: 0}}>
                <LeftOutlined className="iconLeft" onClick={handlePrev}  />     
                <Carousel ref={carouselRef}>
                    <div>
                        <img className="introSlide1" src={introSlide1}></img>
                        <h1>ONE CLICK ON MAP FOR REAL-TIME OFFICIAL STATISTICS OF COVID-19</h1>
                    </div>
                    <div>
                        <h1>2</h1>
                    </div>
                    <div>
                        <h1>3</h1>
                    </div>
                    <div>
                        <h1>4</h1>
                    </div>
               </Carousel>
               <RightOutlined className="iconRight" onClick={handleNext}/>
           </div>
       </div>
    );
};

export default Intro;