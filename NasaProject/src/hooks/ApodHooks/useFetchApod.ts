import { useEffect, useReducer } from "react";
import { fetchApodImages } from "../../services/apodServices";
import { ApodAction } from "../../types/apodActionType";
import { ApodData } from "../../types";

const initialState = {
  data: [] as ApodData[],
  loading: true,
  error: null as string | null,
};

const apodReducer = (state: typeof initialState, action: ApodAction) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const useFetchApod = () => {
  const [state, dispatch] = useReducer(apodReducer, initialState);

  useEffect(() => {
    const fetchImages = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const today = new Date();
        const startDate = new Date();
        startDate.setDate(today.getDate() - 20);

        const startDateString = startDate.toISOString().split("T")[0];
        const endDateString = today.toISOString().split("T")[0];

        const fetchedImages = await fetchApodImages(
          startDateString,
          endDateString
        );

        dispatch({ type: "FETCH_SUCCESS", payload: fetchedImages });
      } catch (error) {
        dispatch({
          type: "FETCH_FAILURE",
          payload: "Failed to fetch APOD images ",
        });
      }
    };

    fetchImages();
  }, []);

  return state;
};
