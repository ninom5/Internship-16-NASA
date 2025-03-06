import axios from "axios";
import { LatLngTuple } from "leaflet";

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const baseUrl = `https://api.nasa.gov/planetary/earth/assets`;

export const fetchEarthImageryData = async (
  today: string,
  position: LatLngTuple
) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        date: today,
        lat: position[0],
        lon: position[1],
        dim: 0.1,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Earth Imagery data:", error);
    return [];
  }
};
