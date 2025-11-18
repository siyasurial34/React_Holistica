import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./apollo/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
