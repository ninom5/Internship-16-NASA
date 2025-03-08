import { useEffect, useReducer, useCallback } from "react";
import { fetchApodImages } from "@services/apodServices";
import { ApodAction } from "../../types";
import { ApodData } from "../../types";

const initialState = {
  data: [] as ApodData[],
  loading: true,
  error: null as string | null,
  hasMore: true,
  startDate: new Date(),
};

const apodReducer = (state: typeof initialState, action: ApodAction) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: [
          ...new Map(
            [...state.data, ...action.payload].map((item) => [item.date, item])
          ).values(),
        ],
        hasMore: action.payload.length > 0,
      };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "UPDATE_START_DATE":
      return { ...state, startDate: action.payload };
    case "UPDATE_APOD_DATA":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export const useFetchApod = () => {
  const [state, dispatch] = useReducer(apodReducer, initialState);

  const fetchMore = useCallback(async () => {
    if (!state.hasMore) return;

    dispatch({ type: "FETCH_REQUEST" });

    try {
      const newStartDate = new Date(state.startDate);
      newStartDate.setDate(newStartDate.getDate() - 21);
      const startDateString = newStartDate.toISOString().split("T")[0];
      const endDateString = state.startDate.toISOString().split("T")[0];

      const fetchedImages = await fetchApodImages(
        startDateString,
        endDateString
      );

      if (fetchedImages.length === 0) {
        console.log("no more images to show");
        dispatch({
          type: "FETCH_FAILURE",
          payload: "No more images available",
        });
        return;
      }

      const uniqueImages = fetchedImages.filter(
        (newItem: ApodData) =>
          !state.data.some(
            (existingItem: ApodData) => existingItem.date === newItem.date
          )
      );

      if (uniqueImages.length === 0) {
        dispatch({
          type: "FETCH_FAILURE",
          payload: "No new images available",
        });
        return;
      }

      dispatch({ type: "FETCH_SUCCESS", payload: fetchedImages });
      dispatch({ type: "UPDATE_START_DATE", payload: newStartDate });
    } catch (error) {
      console.error(" Fetch more failed:", error);
      dispatch({
        type: "FETCH_FAILURE",
        payload: "Failed to fetch APOD images",
      });
    }
  }, [state.startDate, state.hasMore, state.loading]);

  useEffect(() => {
    if (state.data.length === 0) fetchMore();
  }, [state.startDate]);

  return { ...state, fetchMore, dispatch };
};
