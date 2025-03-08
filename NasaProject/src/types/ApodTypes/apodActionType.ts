import { ApodData } from "../contexts";

export type ApodAction =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: ApodData[];
    }
  | { type: "FETCH_FAILURE"; payload: string }
  | { type: "UPDATE_START_DATE"; payload: Date }
  | { type: "UPDATE_APOD_DATA"; payload: ApodData[] };
