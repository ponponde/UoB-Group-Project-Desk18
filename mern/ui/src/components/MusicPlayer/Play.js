import React from "react";
import { PlayCircleOutlined } from '@ant-design/icons';
export default function Play(props) {
  const { handleClick } = props;

  return (
    <button title="btnPlay" className="player__button" onClick={() => handleClick()}>
      <PlayCircleOutlined />
    </button>
  );
}
