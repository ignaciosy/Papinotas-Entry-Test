import React from "react";
import CharacterDetails from "./CharacterDetails";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.getFilteredCharacters = this.getFilteredCharacters.bind(this);
    this.handleFavouriteButtonClick = this.handleFavouriteButtonClick.bind(
      this
    );
    this.state = {
      favouriteCharacters: []
    };
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
    let currentFavourites = this.state.favouriteCharacters;
    if (currentFavourites.includes(name)) {
      currentFavourites.ind;
      currentFavourites = currentFavourites.filter(fav => fav != name);
    } else {
      currentFavourites.push(name);
    }
    this.setState({
      favouriteCharacters: currentFavourites
    });
  }

  render() {
    const filteredCharacters = this.getFilteredCharacters();
    return (
      <div>
        <p>{this.state.favouriteCharacters.join(" - ")}</p>
        {filteredCharacters.map(character => (
          <CharacterDetails
            key={character.name}
            character={character}
            isFavourite={this.state.favouriteCharacters.includes(
              character.name
            )}
            onFavouriteButtonClick={this.handleFavouriteButtonClick}
          />
        ))}
      </div>
    );
  }
}

export default List;
