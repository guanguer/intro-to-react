import React from "react";
import { navigate, RouteComponentProps } from "@reach/router";
import SearchBox from "./SearchBox";

class SearchParams extends React.Component<RouteComponentProps> {
  public handleSearchSubmit() {
    navigate("/");
  }

  public render() {
    return (
      <div className="search-route">
        <SearchBox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
