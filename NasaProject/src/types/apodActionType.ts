import { ApodData } from "../contexts/APOD-context";

export type ApodAction =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: ApodData[];
    }
  | { type: "FETCH_FAILURE"; payload: string };
