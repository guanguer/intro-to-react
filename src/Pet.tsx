import React from "react";
import { Link } from "@reach/router";
import { PetMedia, PetPhoto } from "petfinder-client";

interface Props {
  name: string;
  animal: string;
  breed: string;
  city: string;
  id: string;
  media: PetMedia;
}

class Pet extends React.Component<Props> {
  public render() {
    const { id, name, animal, breed, media, city } = this.props;
    let photos: PetPhoto[] = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    const hero: string = photos[0]
      ? photos[0].value
      : "http://placecorgi.com/300/300";
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}
          </h2>
        </div>
      </Link>
    );
  }
}

export default Pet;
