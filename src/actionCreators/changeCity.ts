import { Action } from "redux";

export interface ChangeCity extends Action<string> {
  payload?: string;
}

export default function changeCity(city: string): ChangeCity {
  return { type: "SET_CITY", payload: city };
}
