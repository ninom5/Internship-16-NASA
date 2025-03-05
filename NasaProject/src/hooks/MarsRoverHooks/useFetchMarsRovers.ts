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

  useEffect(() => {
    const fetchMarsImages = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        let allPhotos: RoverPhoto[] = [];
        let page = currentPage;
        let dateToFetch = new Date(currentDate);

        while (true) {
          const photos = await fetchMarsRoverData(dateToFetch, page);

          if (photos.length === 0) {
            dateToFetch.setDate(dateToFetch.getDate() - 1);
            page = 1;

            const weekBack = new Date();
            weekBack.setDate(weekBack.getDate() - 7);

            if (weekBack > dateToFetch) break;
          } else {
            allPhotos = [...allPhotos, ...photos];
            page++;
          }

          if (allPhotos.length >= 25) break;
        }

        dispatch({ type: "FETCH_SUCCESS", payload: allPhotos });
        setCurrentDate(dateToFetch);
      } catch (error) {
        dispatch({
          type: "FETCH_FAILURE",
          payload: "Failed to fetch mars images",
        });
      }
    };

    fetchMarsImages();
  }, [currentPage, currentDate]);

  const loadNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return { ...state, loadNextPage };
};
