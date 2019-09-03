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
        <div className="content mt-3">
          <div className="row">
            <div className="col-1">
              <i className="text-danger">asd</i>
              <h2>List of Star Wars characters</h2>
            </div>
          </div>
        </div>
        <Characters />
      </ApolloProvider>
    );
  }
}

export default App;
