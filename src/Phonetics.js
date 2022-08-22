import React from "react";
import ReactAudioPlayer from "react-audio-player";
export default function Phonetics(props) {
  console.log(props);
  console.log(props.allPhonetics[0].text);
  return (
    <div className="Phonetics">
      {props.allPhonetics.map(function (phonetic, index) {
        return (
          <div key={index}>
            <ReactAudioPlayer src={phonetic.audio} controls />
            <p>{phonetic.text}</p>
          </div>
        );
      })}
    </div>
  );
}
