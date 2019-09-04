import React from "react";
import CharacterDetails from "./CharacterDetails";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredCharacters: this.props.characters
    };
    this.searchCharacters = this.searchCharacters.bind(this);
  }

  componentDidMount() {}

  searchCharacters(e) {
    let newFilter = null;
    if (e.target.value !== "") {
      newFilter = this.props.characters.filter(character =>
        character.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
    } else {
      newFilter = this.props.characters;
    }
    this.setState(() => ({
      filteredCharacters: newFilter
    }));
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            autoFocus
            onChange={this.searchCharacters}
            placeholder="search characters..."
          ></input>
        </div>
        <div>
          {this.state.filteredCharacters.map(person => (
            //<li key={id}>{`${name}`}</li>
            <CharacterDetails key={person.name} character={person} />
          ))}
        </div>
      </div>
    );
  }
}

export default List;
