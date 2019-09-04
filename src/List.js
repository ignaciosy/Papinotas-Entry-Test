import React from "react";
import CharacterDetails from "./CharacterDetails";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.getFilteredCharacters = this.getFilteredCharacters.bind(this);
    this.handleCharacterClick = this.handleCharacterClick.bind(this);
    this.state = {
      isDetailedView: false
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

  handleCharacterClick(name) {
    this.setState({
      isDetailedView: !this.state.isDetailedView
    });
  }

  render() {
    const filteredCharacters = this.getFilteredCharacters();
    return (
      <div>
        {filteredCharacters.map(character => (
          <CharacterDetails
            key={character.name}
            character={character}
            isDetailedView={this.state.isDetailedView}
            onCharacterClick={this.handleCharacterClick}
          />
        ))}
      </div>
    );
  }
}

export default List;
