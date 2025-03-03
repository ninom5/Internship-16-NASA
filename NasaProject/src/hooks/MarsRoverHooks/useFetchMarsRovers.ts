import { Rover } from "../../contexts/marsrover-context";
import { useEffect, useReducer } from "react";
import { MarsRoverAction } from "../../types/marsRoverActionType";
import { fetchMarsRoverData } from "../../services/marsRoverServices";

interface State {
  rovers: Rover[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  rovers: [],
  loading: true,
  error: null,
};

const marsRoverReducer = (state: State, action: MarsRoverAction): State => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, rovers: action.payload };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const useFetchMarsRovers = () => {
  const [state, dispatch] = useReducer(marsRoverReducer, initialState);

  useEffect(() => {
    const fetchMarsImages = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const rovers = await fetchMarsRoverData();
        console.log(rovers);

        dispatch({ type: "FETCH_SUCCESS", payload: rovers });
      } catch (error) {
        dispatch({
          type: "FETCH_FAILURE",
          payload: "Failed to fetch mars images",
        });
      }
    };

    fetchMarsImages();
  }, []);

  return state;
};
