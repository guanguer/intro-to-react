import { Action } from "redux";

export interface ChangeBreed extends Action<string> {
  payload?: string;
}

export default function changeBreed(breed: string): ChangeBreed {
  return { type: "SET_BREED", payload: breed };
}
