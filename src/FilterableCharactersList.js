import React from "react";
import CharactersList from "./CharactersList";
import FavouritesList from "./FavouritesList";
import Search from "./Search";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    flexGrow: 1
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

class FilterableCharactersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      favouriteCharacters: []
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleFavouriteButtonClick = this.handleFavouriteButtonClick.bind(
      this
    );
    this.getFavouriteCharacters = this.getFavouriteCharacters.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleFavouriteButtonClick(name) {
    let currentFavourites = this.state.favouriteCharacters;
    if (currentFavourites.includes(name)) {
      currentFavourites = currentFavourites.filter(fav => fav != name);
    } else {
      currentFavourites.push(name);
    }
    this.setState({
      favouriteCharacters: currentFavourites
    });
  }

  getFavouriteCharacters() {
    return this.props.characters.filter(character =>
      this.state.favouriteCharacters.includes(character.name)
    );
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Search
              filterText={this.state.filterText}
              onFilterTextChange={this.handleFilterTextChange}
            />
          </Grid>
          <Grid item xs={6}>
            <FavouritesList
              characters={this.getFavouriteCharacters()}
              filterText=""
              favouriteCharacters={this.state.favouriteCharacters}
              onFavouriteButtonClick={this.handleFavouriteButtonClick}
            />
          </Grid>
          <Grid item xs={12}>
            <CharactersList
              characters={this.props.characters}
              filterText={this.state.filterText}
              favouriteCharacters={this.state.favouriteCharacters}
              onFavouriteButtonClick={this.handleFavouriteButtonClick}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

FilterableCharactersList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FilterableCharactersList);
