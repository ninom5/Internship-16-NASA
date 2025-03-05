import axios from "axios";

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers`;
const rovers = ["curiosity", "opportunity", "spirit"];

export const fetchMarsRoverData = async (earthDate: Date, page: number) => {
  try {
    const formattedDate = earthDate.toISOString().split("T")[0];
    let allPhotos: any[] = [];

    for (const roverName of rovers) {
      const response = await axios.get(`${baseUrl}/${roverName}/photos`, {
        params: {
          api_key: apiKey,
          earth_date: formattedDate,
          page: page,
        },
      });
      allPhotos = [...allPhotos, ...response.data.photos];
    }

    return allPhotos;
  } catch (error) {
    console.error("Error fetching mars images: ", error);
    throw new Error("Error fetching mars images");
  }
};
