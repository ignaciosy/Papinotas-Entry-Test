import React from "react";
import SimpleCharacter from "./SimpleCharacter";
import DetailedCharacter from "./DetailedCharacter";

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
        <DetailedCharacter
          character={this.props.character}
          onCharacterClick={this.handleCharacterClick}
          onFavouriteButtonClick={this.handleFavouriteButtonClick}
          isFavourite={this.props.isFavourite}
        />
      );
    } else {
      return (
        <SimpleCharacter
          character={this.props.character}
          onCharacterClick={this.handleCharacterClick}
          onFavouriteButtonClick={this.handleFavouriteButtonClick}
          isFavourite={this.props.isFavourite}
        />
      );
    }
  }
}

export default CharacterDetails;
