import React from "react";

export default function Specie(props) {
  return (
    <div>
      {props.species.map(specie => (
        <p key={specie.name}>
          <b>Species: </b>
          {specie.name}
        </p>
      ))}
    </div>
  );
}
