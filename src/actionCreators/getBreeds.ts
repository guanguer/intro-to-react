import { petfinder } from "../config";
import { Action, Dispatch } from "redux";
import { State } from "../reducers";
import { ThunkAction } from "redux-thunk";

export interface GetBreeds extends Action<string> {
  payload?: string[];
}

export default function getBreeds(): ThunkAction<void, State, any, GetBreeds> {
  return function getBreedsThunk(dispatch, getState) {
    const { animal } = getState();
    if (animal) {
      petfinder.breed.list({ animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          dispatch({
            type: "SET_BREEDS",
            payload: data.petfinder.breeds.breed
          });
        } else {
          dispatch({
            type: "SET_BREEDS",
            payload: []
          });
        }
      });
    } else {
      dispatch({
        type: "SET_BREEDS",
        payload: []
      });
    }
  };
}
