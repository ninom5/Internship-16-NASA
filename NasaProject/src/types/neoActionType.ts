import { NeoData } from "./neoContextType";

export type NeoAction =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; payload: NeoData }
  | { type: "FETCH_FAILURE"; payload: string };
