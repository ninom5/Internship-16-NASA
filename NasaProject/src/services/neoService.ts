import axios from "axios";

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const baseUrl = `https://api.nasa.gov/neo/rest/v1/feed`;

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
