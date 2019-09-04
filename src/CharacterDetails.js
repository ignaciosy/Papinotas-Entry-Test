import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  chip: {
    //margin: theme.spacing(1)
  }
};

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailedView: false
    };
    this.handleCharacterClick = this.handleCharacterClick.bind(this);
    this.handleFavouriteButtonClick = this.handleFavouriteButtonClick.bind(
      this
    );
  }

  handleCharacterClick() {
    this.setState({
      isDetailedView: !this.state.isDetailedView
    });
  }

  handleFavouriteButtonClick() {
    this.props.onFavouriteButtonClick(this.props.character.name);
  }

  render() {
    let classes = this.props.classes;
    if (this.state.isDetailedView) {
      return (
        <div>
          <a href="#" onClick={this.handleCharacterClick}>
            <h2>{this.props.character.name}</h2>
          </a>
          <p>
            <b>Homeworld:</b> {this.props.character.homeworld.name}
          </p>
          {this.props.character.species.map(specie => (
            <p>
              <b>Species: </b>
              {specie.name}
            </p>
          ))}
          <b>Vehicles:</b>
          <ul>
            {this.props.character.vehicles.map(vehicle => (
              <li>{vehicle.name}</li>
            ))}
          </ul>
          <b>Films:</b>
          <ul>
            {this.props.character.films.map(film => (
              <li>{film.title}</li>
            ))}
          </ul>
          <button
            type="button"
            style={
              this.props.isFavourite
                ? { background: "yellow" }
                : { background: "green" }
            }
            onClick={this.handleFavouriteButtonClick}
          >
            Fav
          </button>
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <Chip
            icon={<FaceIcon />}
            label={this.props.character.name}
            className={classes.chip}
            onClick={this.handleCharacterClick}
            onDelete={this.handleFavouriteButtonClick}
            color={this.props.isFavourite ? "secondary" : "primary"}
            deleteIcon={<DoneIcon />}
            variant="outlined"
          />
        </div>
      );
    }
  }
}

CharacterDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CharacterDetails);
