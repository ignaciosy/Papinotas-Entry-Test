import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

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
    <ul>
      {data.allPersons.map(({ id, name }) => (
        <li key={id}>{`${name}`}</li>
      ))}
    </ul>
  );
}
