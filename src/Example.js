import React from "react";
export default function Exapmple(props) {
  if (props.example) {
    return (
      <div className="Example">
        <strong>Example: </strong>
        {props.example}
      </div>
    );
  } else {
    return null;
  }
}
