import React from "react";

class CharacterDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      detailedView: false
    };
  }

  handleClick = e => {
    this.setState({
      detailedView: !this.state.detailedView
    });
  };

  render() {
    if (this.state.detailedView) {
      return (
        <a href="#" onClick={this.handleClick}>
          <div key={this.props.id}>
            <h2>{this.props.name}</h2>
            <h3>height: {this.props.height}</h3>
          </div>
        </a>
      );
    } else {
      return (
        <a href="#" onClick={this.handleClick}>
          <div key={this.props.id}>
            <h2>{this.props.name}</h2>
          </div>
        </a>
      );
    }
  }
}

export default CharacterDetails;
