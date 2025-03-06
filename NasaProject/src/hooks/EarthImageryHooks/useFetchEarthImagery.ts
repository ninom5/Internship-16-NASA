import { EarthImageryData } from "../../types/earthImageryContextType";
import { EarthImageryAction } from "../../types/earthImageryActionType";
import { useEffect, useReducer } from "react";
import { fetchEarthImageryData } from "../../services/earthImageryService";
import { LatLngTuple } from "leaflet";

interface State {
  data: EarthImageryData[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [] as EarthImageryData[],
  loading: true,
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
      return { ...state, loading: false, data: action.payload };
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

        const earthImageryData = await fetchEarthImageryData(
          formattedDate,
          position
        );

        dispatch({ type: "FETCH_SUCCESS", payload: earthImageryData });
      } catch (error) {
        console.error(error);

        dispatch({
          type: "FETCH_FAILURE",
          payload: "Error fetching Earth Imagery data",
        });
      }
    };

    fetchData();
  }, []);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
  };
};
