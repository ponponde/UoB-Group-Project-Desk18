import React from "react";
import { useState, useEffect } from "react";
import "./MusicPlayer.scss";

import Play from "./Play";
import Pause from "./Pause";
import theme from "../../music/themeMusic.mp3";
import buttonSound from "../../music/button.mp3";

function MusicPlayer() {
  const [audioButton] = useState(new Audio(buttonSound));
  const [playing, setPlaying] = useState(true);
  const [volume] = useState(30);
  const finalVolume = (volume / 100) ** 2

  useEffect(() => {
    const audio = document.getElementById("audio");
    if(audio != null){
      audio.volume = finalVolume;
      audio.loop = true;
      playing ? audio.play() : audio.pause();
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
    <div className="player MusicPlayer" title="MusicPlayer">
      <audio id="audio">
        <source src={theme} />
        Your browser does not support the <code>audio</code> element.
      </audio>
      
      <div className="controls">
        {playing ? 
          <Pause  handleClick={() => setPlaying(false)} /> :
          <Play data-testid="btnPlay" handleClick={() => setPlaying(true)} />
        }
      </div>
    </div>
  );
}

export default MusicPlayer;