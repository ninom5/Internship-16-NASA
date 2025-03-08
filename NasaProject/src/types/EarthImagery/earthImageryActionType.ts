export type EarthImageryAction =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: {
        imageUrl: string;
        loading: boolean;
        error: any;
      };
    }
  | { type: "FETCH_FAILURE"; payload: string };
