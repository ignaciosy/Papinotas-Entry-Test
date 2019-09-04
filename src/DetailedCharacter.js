import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import SimpleCharacter from "./SimpleCharacter";
import Homeworld from "./Homeworld";
import Specie from "./Specie";
import Vehicle from "./Vehicle";
import Film from "./Film";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    margin: ".2rem"
  },
  card: {
    backgroundColor: "#7AEFFF",
    margin: ".2rem"
  }
};

class DetailedCharacter extends React.Component {
  constructor(props) {
    super(props);
    this.handleCharacterClick = this.handleCharacterClick.bind(this);
    this.handleFavouriteButtonClick = this.handleFavouriteButtonClick.bind(
      this
    );
  }

  handleCharacterClick() {
    this.props.onCharacterClick();
  }

  handleFavouriteButtonClick() {
    this.props.onFavouriteButtonClick();
  }

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.root}>
        <Query
          query={gql`
            query CharacterDetails($name: String) {
              Person(name: $name) {
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
          `}
          variables={{ name: this.props.character.name }}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Good things take time....</p>;
            if (error) return <p>Something went wrong...</p>;

            return (
              <Card className={classes.card}>
                <CardActionArea onClick={this.handleCharacterClick}>
                  <SimpleCharacter
                    character={this.props.character}
                    onCharacterClick={this.handleCharacterClick}
                    onFavouriteButtonClick={this.handleFavouriteButtonClick}
                    isFavourite={this.props.isFavourite}
                  />
                  <Homeworld homeworld={data.Person.homeworld} />
                  <Specie species={data.Person.species} />
                  <b>Vehicles:</b>
                  <ul>
                    {data.Person.vehicles.map(vehicle => (
                      <Vehicle
                        key={this.props.character.name + vehicle.name}
                        vehicle={vehicle}
                      />
                    ))}
                  </ul>
                  <b>Films:</b>
                  <ul>
                    {data.Person.films.map(film => (
                      <Film
                        key={this.props.character.name + film.title}
                        film={film}
                      />
                    ))}
                  </ul>
                </CardActionArea>
              </Card>
            );
          }}
        </Query>
      </div>
    );
  }
}

DetailedCharacter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DetailedCharacter);
