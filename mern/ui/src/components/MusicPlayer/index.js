import React, {useEffect, useState} from "react";
import "./MusicPlayer.scss";
import theme from "../../music/themeMusic.mp3";
import buttonSound from "../../music/button.mp3";
import buttonSound2 from "../../music/button2.mp3";

const MusicPlayer = (props) => {

  const [audioTheme] = useState(new Audio(theme));
  const [audioButton] = useState(new Audio(buttonSound));
  const [audioButton2] = useState(new Audio(buttonSound2));

  const { isMap } = props;
  useEffect(() => {
    audioTheme.volume = 0.8;
    audioTheme.play();
    audioTheme.loop = true;
  });

  useEffect(() => {
      if(isMap == true){
           document.body.addEventListener('mousedown', soundEffect );

        return function cleanup() {
            window.removeEventListener('mousedown', soundEffect );
        } 
      }else{
        document.body.addEventListener('mousedown', soundEffect2 );

        return function cleanup() {
            window.removeEventListener('mousedown', soundEffect2 );
        } 
      }
    },[]);

    let soundEffect = () => {
        audioButton.play();
    }
    let soundEffect2 = () => {
      audioButton2.play();
    }


  const { visible } = props;

  return (
    <div className="MusicPlayer"/>
  );
};

export default MusicPlayer;
