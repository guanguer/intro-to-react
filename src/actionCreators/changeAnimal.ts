import { Action } from "redux";

export interface ChangeAnimal extends Action<string> {
  payload?: string;
}

export default function changeAnimal(animal: string): ChangeAnimal {
  return { type: "SET_ANIMAL", payload: animal };
}
