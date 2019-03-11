import { GetBreeds } from "../actionCreators/getBreeds";

export default function breeds(state: string[] = [], action: GetBreeds) {
  if (action.type === "SET_BREEDS") {
    return action.payload;
  }
  return state;
}
