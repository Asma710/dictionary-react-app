import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.allMeaning.partOfSpeech}</h3>

      {props.allMeaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="difinition">{definition.definition}</div>

            <div className="example">
              <Example example={definition.example} />
            </div>

            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
