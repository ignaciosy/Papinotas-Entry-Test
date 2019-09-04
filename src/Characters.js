import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import FilterableCharactersList from "./FilterableCharactersList";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

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
  const classes = useStyles();
  const { data, loading, error } = useQuery(allCharactersQuery);
  if (loading)
    return (
      <div className={classes.root}>
        <LinearProgress />
        <br />
        <LinearProgress color="secondary" />
      </div>
    );
  if (error)
    return (
      <div className={classes.root}>
        <h2>Something went wrong.</h2>
      </div>
    );

  return (
    <div>
      <FilterableCharactersList characters={data.allPersons} />
    </div>
  );
}
