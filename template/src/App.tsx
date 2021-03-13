import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { gql } from "graphql-let/macro";

const { useGetRatesQuery } = gql(`
  # import Partial from './partial.graphql'
  query GetRates {
    rates(currency: "USD") {
      ...Partial
    }
  }
`);

function ExchangeRates() {
  const { loading, error, data } = useGetRatesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h4>Exchange Rates for USD</h4>
      {data!.rates.map(({ currency, rate }) => (
        <p key={currency}>
          {currency}: {rate}
        </p>
      ))}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This demonstrates a web client communicating with{" "}
          <a
            href="https://codesandbox.io/s/get-started-coinbase-server-forked-ryztz"
            target="_blank"
            rel="noopener noreferrer"
          >
            a GraphQL Server
          </a>
          .<br />
          Know{" "}
          <a
            href={process.env.REACT_APP_GRAPHQL_ENDPOINT}
            target="_blank"
            rel="noopener noreferrer"
          >
            what operations are available
          </a>{" "}
          and edit the GraphQL query in App.tsx as you like.
          <br />
        </p>
        <ul className="App-links">
          <li>
            <a
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </li>
          <li>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn TypeScript
            </a>
          </li>
          <li>
            <a
              href="https://www.apollographql.com/docs/react/get-started/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Apollo
            </a>
          </li>
          <li>
            <a
              href="https://graphql-code-generator.com/docs/plugins/typescript-react-apollo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn GraphQL code generator
            </a>
          </li>
          <li>
            <a
              href="https://github.com/piglovesyou/graphql-let"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn graphql-let
            </a>
          </li>
        </ul>
        <ExchangeRates />
      </header>
    </div>
  );
}

export default App;
