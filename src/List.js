import React from "react";
import CharacterDetails from "./CharacterDetails";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.getFilteredCharacters = this.getFilteredCharacters.bind(this);
    this.handleFavouriteButtonClick = this.handleFavouriteButtonClick.bind(
      this
    );
  }

  getFilteredCharacters() {
    let filteredCharacters = null;
    if (this.props.filterText !== "") {
      filteredCharacters = this.props.characters.filter(character =>
        character.name
          .toLowerCase()
          .includes(this.props.filterText.toLowerCase())
      );
    } else {
      filteredCharacters = this.props.characters;
    }
    return filteredCharacters;
  }

  handleFavouriteButtonClick(name) {
    this.props.onFavouriteButtonClick(name);
  }

  render() {
    let classes = this.props.classes;
    const filteredCharacters = this.getFilteredCharacters();
    return (
      <div className={classes.root}>
        {filteredCharacters.map(character => (
          <CharacterDetails
            key={character.name}
            character={character}
            isFavourite={this.props.favouriteCharacters.includes(
              character.name
            )}
            onFavouriteButtonClick={this.handleFavouriteButtonClick}
          />
        ))}
      </div>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(List);
