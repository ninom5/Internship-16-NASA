import axios from "axios";

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const baseUrl = `https://api.nasa.gov/planetary/apod`;

export const fetchApodImages = async (startDate: string, endDate: string) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        start_date: startDate,
        end_date: endDate,
      },
    });

    console.log(response.data);

    return response.data.map((item: any) => ({
      mediaUrl: item.url,
      description: item.explanation,
      date: item.date,
      mediaType: item.media_type,
      title: item.title,
    }));
  } catch (error) {
    throw new Error("Error fetching apod images");
  }
};
