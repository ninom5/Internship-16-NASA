import { Rover } from "../contexts";

export type MarsRoverAction =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: Rover[];
    }
  | { type: "FETCH_FAILURE"; payload: string };
