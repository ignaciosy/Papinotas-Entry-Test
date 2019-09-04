import React from "react";

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
        <div>
          <a href="#" onClick={this.handleCharacterClick}>
            <h2>{this.props.character.name}</h2>
          </a>
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
    }
  }
}

export default CharacterDetails;
