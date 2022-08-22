import React from "react";
export default function Meaning(props) {
  console.log(props.allMeaning);
  return (
    <div className="Meaning">
      <h3>{props.allMeaning.partOfSpeech}</h3>
      {props.allMeaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <br />
            <em>{definition.exmple}</em>
          </div>
        );
      })}
    </div>
  );
}
