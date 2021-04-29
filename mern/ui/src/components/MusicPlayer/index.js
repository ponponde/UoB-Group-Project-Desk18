import React from "react";
import { useState, useEffect } from "react";
import "./MusicPlayer.scss";

import Play from "./Play";
import Pause from "./Pause";
import theme from "../../music/themeMusic.mp3";
import buttonSound from "../../music/button.mp3";
import { Slider, InputNumber } from 'antd';


import useAudio from './useAudio';

function MusicPlayer() {
//   const { curTime, duration, playing, setPlaying, setClickedTime } = useAudio();
const [audioButton] = useState(new Audio(buttonSound));
const [curTime, setCurTime] = useState();
const [playing, setPlaying] = useState(true);
const [clickedTime, setClickedTime] = useState();
const [volume] = useState(30);
const [muted, setMuted] = useState(false)
const finalVolume = muted ? 0 : (volume / 100) ** 2

useEffect(() => {
    const audio = document.getElementById("audio");
       
    // state setters wrappers
    const setAudioData = () => {
        setCurTime(audio.currentTime);
    }

    const setAudioTime = () => setCurTime(audio.currentTime);
     
    // DOM listeners: update React state on DOM events
    audio.addEventListener("loadeddata", setAudioData);

    audio.addEventListener("timeupdate", setAudioTime);
    
    audio.volume = finalVolume;
    audio.loop = true;
    // React state listeners: update DOM on React state changes
    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
        audio.currentTime = clickedTime;
        setClickedTime(null);
    } 

    // effect cleanup
    return () => {
        audio.removeEventListener("loadeddata", setAudioData);
        audio.removeEventListener("timeupdate", setAudioTime);
    }
});

useEffect(() => {
    
         document.body.addEventListener('mousedown', soundEffect );

      return function cleanup() {
          window.removeEventListener('mousedown', soundEffect );
      } 
    
  },[]);

  let soundEffect = () => {
    audioButton.volume = 0.7;
    audioButton.play();
  }
  

  
  return (
    <div className="player MusicPlayer">
      <audio id="audio">
        <source src={theme} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      
      <div className="controls">
        {playing ? 
          <Pause handleClick={() => setPlaying(false)} /> :
          <Play handleClick={() => setPlaying(true)} />
        }
      </div>
    </div>
  );
}

export default MusicPlayer;