import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "./Phonetics.css";
export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.allPhonetics.map(function (phonetic, index) {
        return (
          <div key={index}>
            <ReactAudioPlayer src={phonetic.audio} controls />
            <p className="text">{phonetic.text}</p>
          </div>
        );
      })}
    </div>
  );
}
