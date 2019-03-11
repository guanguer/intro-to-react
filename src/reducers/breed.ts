import { ChangeBreed } from "../actionCreators/changeBreed";

export default function breed(state = "", action: ChangeBreed) {
  if (action.type === "SET_BREED") {
    return action.payload;
  } else if (action.type === "SET_ANIMAL") {
    return "";
  } else {
    return state;
  }
}
