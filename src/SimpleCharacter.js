import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";

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

class SimpleCharacter extends React.Component {
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
        <Chip
          icon={<FaceIcon />}
          label={this.props.character.name}
          className={classes.chip}
          onClick={this.handleCharacterClick}
          onDelete={this.handleFavouriteButtonClick}
          color={this.props.isFavourite ? "secondary" : "primary"}
          deleteIcon={<FavoriteBorderRoundedIcon />}
          variant="outlined"
        />
      </div>
    );
  }
}

SimpleCharacter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCharacter);
