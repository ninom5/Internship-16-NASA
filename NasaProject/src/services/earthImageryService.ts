import axios from "axios";
import { LatLngTuple } from "leaflet";

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const baseUrl = `https://api.nasa.gov/planetary/earth/imagery`;

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
        dim: 0.5,
      },
      responseType: "blob",
    });

    if (response.status !== 200)
      throw new Error("Error fetching Earth Imagery data");

    const imageUrl = URL.createObjectURL(response.data);
    return imageUrl;
  } catch (error) {
    console.error("Error fetching Earth Imagery data:", error);
    throw error;
  }
};
