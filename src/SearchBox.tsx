import React from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { ANIMALS } from "petfinder-client";
import changeCity from "./actionCreators/changeCity";
import changeAnimal from "./actionCreators/changeAnimal";
import changeBreed from "./actionCreators/changeBreed";
import getBreeds from "./actionCreators/getBreeds";
import { State } from "./reducers";

interface Props {
  city: string;
  animal: string;
  breed: string;
  breeds: string[];
  search: () => void;
  handleCityChange?: () => void;
  handleAnimalChange?: () => void;
  handleBreedChange?: () => void;
}

class SearchBox extends React.Component<Props> {
  public handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.search();
  };
  public render() {
    return (
      <div className="search-params">
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor="city">
            City
            <input
              id="city"
              value={this.props.city}
              placeholder="City, State"
              onChange={this.props.handleCityChange}
            />
          </label>
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              value={this.props.animal}
              onChange={this.props.handleAnimalChange}
              onBlur={this.props.handleAnimalChange}
            >
              <option />
              {ANIMALS.map(animal => (
                <option key={animal} value={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="breed">
            Breed
            <select
              id="breed"
              value={this.props.breed}
              onChange={this.props.handleBreedChange}
              onBlur={this.props.handleBreedChange}
              disabled={!this.props.breeds.length}
            >
              <option />
              {this.props.breeds.map(breed => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ city, animal, breed, breeds }: Props) => ({
  city,
  animal,
  breed,
  breeds
});

const mapDispatchToProps = (
  dispatch: (
    action: Action<string> | ThunkAction<void, State, undefined, Action<string>>
  ) => void
) => ({
  handleCityChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(changeCity(event.target.value));
  },
  handleAnimalChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(changeAnimal(event.target.value));
    dispatch(getBreeds());
  },
  handleBreedChange(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(changeBreed(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
