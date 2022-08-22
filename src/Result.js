import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Result.css";
export default function Result(props) {
  if (props.allResult) {
    return (
      <div className="Result">
        <section>
          <h2>{props.allResult.word}</h2>
          <Phonetics allPhonetics={props.allResult.phonetics} />
        </section>

        {props.allResult.meanings.map(function (meaning, index) {
          //return meaning.definitions[0].definition;/
          return (
            <section key={index}>
              <Meaning allMeaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
