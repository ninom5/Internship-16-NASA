import { RoverPhoto } from "../../contexts";
import { useEffect, useReducer, useState } from "react";
import { MarsRoverAction } from "../../types/marsRoverActionType";
import { fetchMarsRoverData } from "../../services/marsRoverServices";

interface State {
  photos: RoverPhoto[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  photos: [],
  loading: true,
  error: null,
};

const marsRoverReducer = (state: State, action: MarsRoverAction): State => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        photos: [...state.photos, ...action.payload],
      };
    case "FETCH_FAILURE":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export const useFetchMarsRovers = () => {
  const [state, dispatch] = useReducer(marsRoverReducer, initialState);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async (date: Date, page: number) => {
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const fetchedImages = await fetchMarsRoverData(date, page);

      if (fetchedImages.length === 0) {
        setCurrentDate((prevDate) => {
          const newDate = new Date(prevDate);
          newDate.setDate(newDate.getDate() - 1);
          return newDate;
        });
        setCurrentPage(1);
        return;
      }

      dispatch({ type: "FETCH_SUCCESS", payload: fetchedImages });
    } catch (error) {
      dispatch({
        type: "FETCH_FAILURE",
        payload: "Failed to fetch mars images",
      });
      console.error("error fetching mars images: ", error);
    }
  };

  useEffect(() => {
    fetchData(currentDate, currentPage);
  }, [currentDate, currentPage]);

  const fetchNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return { ...state, fetchNextPage };
};
