import { combineReducers } from "redux";
import city from "./city";
import animal from "./animal";
import breed from "./breed";
import breeds from "./breeds";

export interface State {
  city: string;
  animal: string;
  breed: string;
  breeds: string[];
}

export default combineReducers({
  city,
  animal,
  breed,
  breeds
});
