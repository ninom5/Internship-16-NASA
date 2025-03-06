import { EarthImageryData } from "./earthImageryContextType";

export type EarthImageryAction =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; payload: EarthImageryData[] }
  | { type: "FETCH_FAILURE"; payload: string };
