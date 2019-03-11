import React from "react";
import { connect, DispatchProp } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import { Pet as PetType, PetFindResponse } from "petfinder-client";
import { petfinder } from "./config";
import Pet from "./Pet";
import SearchBox from "./SearchBox";
import { State } from "./reducers";

interface StateProps {
  city: string;
  animal: string;
  breed: string;
}

interface LocalState {
  pets: PetType[];
  error: any;
}

type Props = StateProps & RouteComponentProps;

class Results extends React.Component<Props, LocalState> {
  constructor(props: Props & RouteComponentProps) {
    super(props);
    this.state = {
      pets: [],
      error: null
    };
  }

  public componentDidMount() {
    this.search();
  }

  public search = () => {
    petfinder.pet
      .find({
        output: "full",
        location: this.props.city,
        animal: this.props.animal,
        breed: this.props.breed
      })
      .then((data: PetFindResponse) => {
        let pets: PetType[];
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({
          pets
        });
      })
      .catch(err => {
        this.setState({
          error: err
        });
      });
  };

  public render() {
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {this.state.pets.map(pet => {
          const breed = Array.isArray(pet.breeds.breed)
            ? pet.breeds.breed.join(", ")
            : pet.breeds.breed;
          return (
            <Pet
              key={pet.id}
              id={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              city={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps: (state: State) => StateProps = ({
  city,
  breed,
  animal
}) => ({
  city,
  breed,
  animal
});

export default connect(mapStateToProps)(Results);
