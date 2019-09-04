import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import Characters from "./Characters";

const client = new ApolloClient({
  uri: "https://api.graphcms.com/simple/v1/swapi"
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <h2>List of Star Wars characters</h2>
        <Characters />
      </ApolloProvider>
    );
  }
}

export default App;
