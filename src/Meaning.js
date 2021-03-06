import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="content" key={index}>
            <p>
              <strong>Definition: </strong>
              {definition.definition}
            </p>
            <br />
            <div className="example">
              <strong>Example: </strong>
              <em>"{definition.example}".</em>
            </div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
