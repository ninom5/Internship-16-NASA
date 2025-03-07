import { LatLngExpression } from "leaflet";

export type EarthImageryAction =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: {
        position: LatLngExpression;
        data: any;
        loading: boolean;
        error: any;
        imageUrl: string | null;
      };
    }
  | { type: "FETCH_FAILURE"; payload: string };
