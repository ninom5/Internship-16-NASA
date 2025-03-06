import axios from "axios";

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const baseUrl = `https://api.nasa.gov/planetary/earth/assets`;

export const fetchEarthImageryData = async (today: string) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        date: today,
        //dodat lng lat din
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching Earth Imagery data:", error);
    return [];
  }
};
