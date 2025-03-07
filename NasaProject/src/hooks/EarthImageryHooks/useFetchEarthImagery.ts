import { useEffect, useReducer } from "react";
import { fetchEarthImageryData } from "../../services/earthImageryService";
import { LatLngTuple } from "leaflet";

interface State {
  position: LatLngTuple;
  loading: boolean;
  error: string | null;
  imageUrl: string | null;
}

const initialState: State = {
  position: [43.508133, 16.440193],
  loading: false,
  error: null,
  imageUrl: null,
};

type EarthImageryAction =
  | { type: "FETCH_REQUEST" }
  | { type: "FETCH_SUCCESS"; payload: string }
  | { type: "FETCH_FAILURE"; payload: string };

const earthImageryReducer = (
  state: State,
  action: EarthImageryAction
): State => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        imageUrl: action.payload,
      };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useFetchEarthImagery = (position: LatLngTuple) => {
  const [state, dispatch] = useReducer(earthImageryReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });

      try {
        const today = new Date();
        const formattedDate = today.toISOString().split("T")[0];

        const imageUrl = await fetchEarthImageryData(formattedDate, position);

        dispatch({ type: "FETCH_SUCCESS", payload: imageUrl });
      } catch (error) {
        console.error(error);
        dispatch({
          type: "FETCH_FAILURE",
          payload: "Error fetching Earth Imagery data",
        });
      }
    };

    fetchData();
  }, [position]);

  return {
    position: state.position,
    loading: state.loading,
    error: state.error,
    imageUrl: state.imageUrl,
  };
};
