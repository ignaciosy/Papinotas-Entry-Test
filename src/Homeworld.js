import React from "react";

export default function Homeworld(props) {
  if (props.homeworld) {
    return (
      <p>
        <b>Homeworld:</b> {props.homeworld.name}
      </p>
    );
  } else {
    return (
      <p>
        <b>Homeworld:</b> Unknown
      </p>
    );
  }
}
