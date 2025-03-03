import { Rover } from "../contexts/marsrover-context";

export type MarsRoverAction =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: Rover[];
    }
  | { type: "FETCH_FAILURE"; payload: string };
