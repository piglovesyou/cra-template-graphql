import React from 'react';
import logo from './logo.svg';
import './App.css';
import { gql } from 'graphql-let/macro'

const {useViewerQuery} = gql(`
  # import Partial from './partial.graphql'
  query Viewer {
    viewer {
      ...Partial
    }
  }
`);

function App() {
  const {data} = useViewerQuery();
  const name = data?.viewer?.name;
  return (
    <div className="App">
      <h1>{name ? `Hello, ${name}!` : '...'}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
