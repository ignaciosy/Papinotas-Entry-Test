import React from "react";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  textField: {
    margin: "1rem"
  }
};

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
      <form className={this.props.classes.container}>
        <TextField
          id="outlined-name"
          label="Search"
          autoFocus
          className={this.props.classes.textField}
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Search);
