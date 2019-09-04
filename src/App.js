import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Characters from "./Characters";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};

const client = new ApolloClient({
  uri: "https://api.graphcms.com/simple/v1/swapi"
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className={this.props.classes.container}>
          <h1>List of Star Wars characters</h1>
        </div>
        <Characters />
      </ApolloProvider>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
