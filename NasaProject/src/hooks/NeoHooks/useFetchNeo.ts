import { NeoData } from "../../types/neoContextType";
import { NeoAction } from "../../types/neoActionType";
import { useEffect, useReducer } from "react";
import { fetchNeoData } from "../../services/neoService";

interface State {
  data: NeoData[];
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  data: [] as NeoData[],
  loading: true,
  error: null,
};

const neoReducer = (state: State, action: NeoAction): State => {
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

export const useFetchNeo = () => {
  const [state, dispatch] = useReducer(neoReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });

      const today = new Date();
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);

      const todayString = today.toISOString().split("T")[0];
      const yesterdayString = yesterday.toISOString().split("T")[0];

      try {
        const neoData = await fetchNeoData(todayString, yesterdayString);
        dispatch({ type: "FETCH_SUCCESS", payload: neoData });
      } catch (error) {
        dispatch({ type: "FETCH_FAILURE", payload: "Error fetching NEO data" });
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
