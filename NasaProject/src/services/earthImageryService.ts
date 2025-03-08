import axios from "axios";
import { LatLngTuple } from "leaflet";
import { EARTH_IMAGERY_API_PATH } from "@constants/apiPaths";

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const baseUrl = EARTH_IMAGERY_API_PATH;

export const fetchEarthImageryData = async (
  today: string,
  position: LatLngTuple
): Promise<string> => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        lat: position[0],
        lon: position[1],
        dim: 0.25,
      },
    });

    if (response.status !== 200)
      throw new Error("Error fetching Earth Imagery data");

    return response.data.url;
  } catch (error) {
    console.error("Error fetching Earth Imagery data:", error);
    throw error;
  }
};
