import { RoverPhoto } from "@contexts/index";

export type MarsRoverAction =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: RoverPhoto[];
    }
  | { type: "FETCH_FAILURE"; payload: string };
