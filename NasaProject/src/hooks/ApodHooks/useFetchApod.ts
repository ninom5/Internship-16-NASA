import { useEffect, useReducer } from "react";
import axios from "axios";
import { ApodAction } from "../../types/apodActionType";

interface ApodData {
  mediaUrl: string | null;
  description: string;
  date: string;
  mediaType: string;
}

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
  const apiKey = import.meta.env.VITE_NASA_API_KEY;
  const baseUrl = `https://api.nasa.gov/planetary/apod`;

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

        const response = await axios.get(baseUrl, {
          params: {
            api_key: apiKey,
            start_date: startDateString,
            end_date: endDateString,
          },
        });

        const fetchedImages = response.data.map((item: any) => ({
          mediaUrl: item.url,
          description: item.explanation,
          date: item.date,
          mediaType: item.media_type,
        }));

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
