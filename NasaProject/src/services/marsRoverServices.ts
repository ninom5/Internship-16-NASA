import axios from "axios";
import { MARS_ROVER_API_PATH } from "@constants/apiPaths";

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const baseUrl = MARS_ROVER_API_PATH;
const rovers = ["curiosity", "opportunity", "spirit"];

export const fetchMarsRoverData = async (earthDate: Date) => {
  try {
    const formattedDate = earthDate.toISOString().split("T")[0];
    let allPhotos: any[] = [];

    for (const roverName of rovers) {
      const response = await axios.get(`${baseUrl}/${roverName}/photos`, {
        params: {
          api_key: apiKey,
          earth_date: formattedDate,
        },
      });

      allPhotos = [...allPhotos, ...response.data.photos];
    }

    return allPhotos;
  } catch (error) {
    console.error("Error fetching Mars images:", error);
    return [];
  }
};
