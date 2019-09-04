import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import List from "./List";

const allCharactersQuery = gql`
  {
    allPersons(orderBy: name_ASC) {
      name
      homeworld {
        name
      }
      species {
        name
      }
      vehicles {
        name
      }
      films {
        title
      }
    }
  }
`;

export default function Characters() {
  const { data, loading, error } = useQuery(allCharactersQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <List characters={data.allPersons} />
    </div>
  );
}
