import { useEffect, useReducer } from "react";
import { fetchEarthImageryData } from "@services/earthImageryService";
import { LatLngTuple } from "leaflet";
import { EarthImageryAction } from "types/earthImageryActionType";

interface State {
  imageUrl: string;
  position: LatLngTuple;
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  imageUrl: "",
  position: [43.508133, 16.440193],
  loading: false,
  error: null,
};

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
        imageUrl: action.payload.imageUrl,
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

        dispatch({
          type: "FETCH_SUCCESS",
          payload: {
            imageUrl,
            loading: false,
            error: null,
          },
        });
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
    loading: state.loading,
    error: state.error,
    imageUrl: state.imageUrl,
  };
};
