import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import Results from "./Results";
import SearchParams from "./SearchParams";
import NavBar from "./NavBar";
import store from "./store";
import "./main.css";

const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <h1>Loading...</h1>;
  }
});

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <LoadableDetails path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
