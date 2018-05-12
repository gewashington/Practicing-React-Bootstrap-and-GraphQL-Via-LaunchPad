import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Movies from './Movies';
import logo from './logo.svg';
import './App.css';

/*To Do:
- Add Search Form
- Fix layout to Grid Format
*/

const client = new ApolloClient({
  uri: "https://3wzp7qnjv.lp.gql.zone/graphql"
})

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
    <nav class="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Practice React And GraphQL using Movie LaunchPadQL</a>
      </nav>
      <div>
        <Movies />
      </div>
    </div>
  </ApolloProvider>
)

export default App;
