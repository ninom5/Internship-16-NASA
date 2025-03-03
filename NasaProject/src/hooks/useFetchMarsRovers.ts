import axios from "axios";
import { Rover } from "../contexts/marsrover-context";
import { useEffect, useReducer } from "react";

interface State {
  rovers: Rover[];
  loading: boolean;
  error: string | null;
}

type MarsRoverAction =
  | { type: "FETCH_REQUEST" }
  | {
      type: "FETCH_SUCCESS";
      payload: Rover[];
    }
  | { type: "FETCH_FAILURE"; payload: string };

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
  const apiKey = import.meta.env.VITE_NASA_API_KEY;
  const baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers`;

  const [state, dispatch] = useReducer(marsRoverReducer, initialState);

  useEffect(() => {
    const fetchMarsImages = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const response = await axios.get(baseUrl, {
          params: {
            api_key: apiKey,
          },
        });

        console.log(response);

        dispatch({ type: "FETCH_SUCCESS", payload: response.data.rovers });
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
