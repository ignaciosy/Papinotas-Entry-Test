import React from "react";
import CharactersList from "./CharactersList";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

class FavouritesList extends React.Component {
  constructor(props) {
    super(props);
    this.handleFavouriteButtonClick = this.handleFavouriteButtonClick.bind(
      this
    );
  }

  handleFavouriteButtonClick(name) {
    this.props.onFavouriteButtonClick(name);
  }

  render() {
    const classes = this.props.classes;
    return (
      <div>
        <div className={classes.root}>
          <h2>My Favourites</h2>
        </div>
        <CharactersList
          characters={this.props.characters}
          filterText=""
          favouriteCharacters={this.props.favouriteCharacters}
          onFavouriteButtonClick={this.handleFavouriteButtonClick}
        />
      </div>
    );
  }
}

FavouritesList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FavouritesList);
