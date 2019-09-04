import React from "react";
import List from "./List";
import Search from "./Search";

class FilterableCharactersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <Search
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <List
          characters={this.props.characters}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default FilterableCharactersList;
