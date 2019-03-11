import React from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import Loadable from "react-loadable";
import Results from "./Results";
import SearchParams from "./SearchParams";
import NavBar from "./NavBar";
import store from "./store";

const LoadableDetails = Loadable({
  loader: () => import("./Details"),
  loading() {
    return <h1>Loading...</h1>;
  }
});

class App extends React.Component {
  public render() {
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

export default App;
