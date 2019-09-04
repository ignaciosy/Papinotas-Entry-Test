import React from "react";

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailedView: false
    };
    this.handleCharacterClick = this.handleCharacterClick.bind(this);
  }

  handleCharacterClick() {
    this.setState({
      isDetailedView: !this.state.isDetailedView
    });
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
        </div>
      );
    } else {
      return (
        <div>
          <a href="#" onClick={this.handleCharacterClick}>
            <h2>{this.props.character.name}</h2>
          </a>
        </div>
      );
    }
  }
}

export default CharacterDetails;
