import { useEffect, useReducer, useState } from "react";
import { fetchMarsRoverData } from "@services/marsRoverServices";
import { RoverPhoto } from "@contexts/index";
import { MarsRoverAction } from "types";
import { all } from "axios";

interface State {
  allPhotos: RoverPhoto[];
  photos: RoverPhoto[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  allPhotos: [],
  photos: [],
  loading: false,
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
        photos: action.payload,
        allPhotos: [...state.allPhotos, ...action.payload],
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

  const IMAGES_PER_PAGE = 25;

  useEffect(() => {
    const fetchData = async () => {
      if (state.allPhotos.length >= currentPage * IMAGES_PER_PAGE) return;

      dispatch({ type: "FETCH_REQUEST" });

      let fetchedImages: RoverPhoto[] = [];
      let tempDate = new Date(currentDate);

      while (fetchedImages.length < IMAGES_PER_PAGE) {
        const newImages = await fetchMarsRoverData(tempDate);
        fetchedImages = [...fetchedImages, ...newImages];

        tempDate.setDate(tempDate.getDate() - 1);
      }

      dispatch({ type: "FETCH_SUCCESS", payload: fetchedImages });
      setCurrentDate(tempDate);
    };

    fetchData();
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage * IMAGES_PER_PAGE < state.allPhotos.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return {
    photos: state.allPhotos.slice(
      (currentPage - 1) * IMAGES_PER_PAGE,
      currentPage * IMAGES_PER_PAGE
    ),
    allPhotos: state.allPhotos,
    loading: state.loading,
    error: state.error,
    nextPage,
    prevPage,
    currentPage,
  };
};
