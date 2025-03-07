import axios from "axios";

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers`;
const rovers = ["curiosity", "opportunity", "spirit"];

export const fetchMarsRoverData = async (
  earthDate: Date,
  selectedRover: string,
  selectedCamera: string
) => {
  try {
    const formattedDate = earthDate.toISOString().split("T")[0];
    let allPhotos: any[] = [];

    console.log(selectedCamera, selectedRover);
    const filterRoverList =
      selectedRover === "All" ? rovers : [selectedRover?.toLowerCase()];

    console.log(filterRoverList);
    for (const roverName of filterRoverList) {
      console.log(roverName);
      console.log(`${baseUrl}/${roverName}/photos?earth_date=${formattedDate}`);
      const response = await axios.get(`${baseUrl}/${roverName}/photos`, {
        params: {
          api_key: apiKey,
          earth_date: formattedDate,
        },
      });

      console.log(response.data);

      let photos = response.data.photos;

      if (selectedCamera !== "All")
        photos = photos.filter(
          (photo: any) => photo.camera.name === selectedCamera
        );

      allPhotos = [...allPhotos, ...photos];
    }

    return allPhotos;
  } catch (error) {
    console.error("Error fetching Mars images:", error);
    return [];
  }
};
