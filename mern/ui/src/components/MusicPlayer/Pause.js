import React from "react";
import { PauseCircleOutlined } from '@ant-design/icons';


export default function Play(props) {
  const { handleClick } = props;
  
  return (
    <button title="btnPause" className="player__button" onClick={() => handleClick()}>
      <PauseCircleOutlined />
    </button>
  );
}
