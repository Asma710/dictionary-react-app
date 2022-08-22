import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
export default function Meaning(props) {
  console.log(props.allMeaning);
  return (
    <div className="Meaning">
      <h3>{props.allMeaning.partOfSpeech}</h3>
      {props.allMeaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition:</strong>
            {definition.definition}
            <br />
            <Example example={definition.example} />
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
