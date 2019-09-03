import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import CharacterDetails from "./CharacterDetails";

const allCharactersQuery = gql`
  {
    allPersons(orderBy: name_ASC) {
      id
      name
    }
  }
`;

export default function Characters() {
  const { data, loading, error } = useQuery(allCharactersQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.allPersons.map(({ id, name, height }) => (
        //<li key={id}>{`${name}`}</li>
        <CharacterDetails id={id} name={name} />
      ))}
    </div>
  );
}
