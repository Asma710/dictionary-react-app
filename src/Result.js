import React from "react";
import Meaning from "./Meaning";
export default function Result(props) {
  if (props.allResult) {
    return (
      <div className="Result">
        <h2>{props.allResult.word}</h2>

        {props.allResult.meanings.map(function (meaning, index) {
          //return meaning.definitions[0].definition;/
          return (
            <div key={index}>
              <Meaning allMeaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
