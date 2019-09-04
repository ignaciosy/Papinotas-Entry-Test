import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          type="text"
          autoFocus
          placeholder="search characters..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        ></input>
      </form>
    );
  }
}
export default Search;
