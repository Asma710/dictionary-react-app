import React from "react";
export default function Exapmple(props) {
  if (props.example) {
    return <div className="Example">{props.example}</div>;
  } else {
    return null;
  }
}
