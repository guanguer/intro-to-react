import { ChangeCity } from "../actionCreators/changeCity";

export default function city(state = "Seattle, WA", action: ChangeCity) {
  if (action.type === "SET_CITY") {
    return action.payload;
  }
  return state;
}
