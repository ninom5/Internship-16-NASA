import axios from "axios";
import { APOD_API_PATH } from "@constants/apiPaths";

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const baseUrl = APOD_API_PATH;

export const fetchApodImages = async (startDate: string, endDate: string) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        api_key: apiKey,
        start_date: startDate,
        end_date: endDate,
        thumbs: true,
      },
    });

    return response.data.map((item: any) => ({
      mediaUrl: item.url,
      description: item.explanation,
      date: item.date,
      mediaType: item.media_type,
      title: item.title,
      hdurl: item.hdurl,
      thumbnail_url: item.thumbnail_url,
    }));
  } catch (error) {
    throw new Error("Error fetching apod images");
  }
};
