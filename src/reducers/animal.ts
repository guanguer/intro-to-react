import { ChangeAnimal } from "../actionCreators/changeAnimal";

export default function animal(state = "", action: ChangeAnimal) {
  if (action.type === "SET_ANIMAL") {
    return action.payload;
  }
  return state;
}
