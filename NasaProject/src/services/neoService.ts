import axios from "axios";
import { NEO_API_PATH } from "@constants/apiPaths";

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const baseUrl = NEO_API_PATH;

export const fetchNeoData = async (startDate: string, endDate: string) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        start_date: startDate,
        end_date: endDate,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching NEO data:", error);
    return [];
  }
};
