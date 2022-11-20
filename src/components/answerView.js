import React from "react";

export default function AnswerView(props) {
  return (
    <li className="listItem" style={props.style}>
      {props.data}
    </li>
  );
}
