export default function animal(state = "", action) {
  if (action.type === "SET_ANIMAL") {
    return action.payload;
  }
  return state;
}
