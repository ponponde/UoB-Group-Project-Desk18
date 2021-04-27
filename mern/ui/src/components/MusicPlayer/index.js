import React, {useEffect, useState} from "react";
import "./MusicPlayer.scss";
import theme from "../../music/themeMusic.mp3";
import buttonSound from "../../music/button.mp3";

const MusicPlayer = (props) => {

  const [audioTheme] = useState(new Audio(theme));
  const [audioButton] = useState(new Audio(buttonSound));

  useEffect(() => {
    audioTheme.volume = 0.8;
    audioTheme.play();
    audioTheme.loop = true;
  });

  useEffect(() => {
    document.body.addEventListener('click', soundEffect );

        return function cleanup() {
            window.removeEventListener('click', soundEffect );
        } 
    },[]);
    let soundEffect = () => {
        audioButton.play();
    }

  const { visible } = props;
  return (
    <div className="MusicPlayer"/>
  );
};

export default MusicPlayer;
