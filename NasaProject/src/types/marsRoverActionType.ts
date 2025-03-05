import { RoverPhoto } from "../contexts";

export type MarsRoverAction =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: RoverPhoto[];
    }
  | { type: "FETCH_FAILURE"; payload: string };
