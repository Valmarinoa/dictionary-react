import React from "react";
import logo from "./audio.png";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <img src={logo} className="audioDesc" alt="audio-description"></img>
      </a>
      {props.phonetic.text}
    </div>
  );
}
