import axios from "axios";

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers`;

export const fetchMarsRoverData = async () => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        api_key: apiKey,
      },
    });

    return response.data.rovers;
  } catch (error) {
    throw new Error("Error fetching mars images");
  }
};
