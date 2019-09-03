import React from "react";

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
          <div key={this.props.id}>
            <h2>{this.props.name}</h2>
          </div>
      );
    }
  }
}

export default CharacterDetails;
