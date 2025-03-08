import { useState, useEffect } from "react";
import { useApod } from "@hooks/index";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchApodImages } from "@services/apodServices";
import { ApodData } from "types";

export const ApodImage: React.FC = () => {
  const { data, loading, error, dispatch } = useApod();
  const navigate = useNavigate();

  const currentDate = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(currentDate);
  const [selectedImg, setSelectedImg] = useState<ApodData>();

  useEffect(() => {
    const foundImage = data.find((img) => img.date === date);
    setSelectedImg(foundImage || selectedImg);
  }, [date, data, currentDate]);

  const handleClick = ({ date }: { date: string }) => {
    const existingImage = data.find((img) => img.date === date);

    if (!existingImage && selectedImg) {
      const updatedData = [...data, selectedImg];

      if (dispatch)
        dispatch({ type: "UPDATE_APOD_DATA", payload: updatedData });

      navigate(`/astronomy/${date}`);
    } else {
      navigate(`/astronomy/${date}`);
    }
  };

  const fetchImageForDate = async (targetDate: string) => {
    try {
      const fetchedImages = await fetchApodImages(targetDate, targetDate);
      if (fetchedImages.length) {
        setSelectedImg(fetchedImages[0]);
      }
    } catch (error) {
      toast.error("Failed to fetch image for the selected date.");
    }
  };

  const handleDateChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newDate = event.target.value.toString();

    if (newDate > currentDate) {
      toast.error("Date can't be in the future");
      return;
    }

    const existingImage = data.find((img) => img.date === newDate);

    if (!existingImage) {
      await fetchImageForDate(newDate);
    }

    setDate(newDate);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="apod-section">
      <h1>APOD: Astronomy Picture of the Day</h1>
      {selectedImg && (
        <div className="image-container">
          <img
            src={selectedImg.mediaUrl ?? undefined}
            alt={selectedImg.title ?? "Astronomy picture of the day"}
            id="image-of-the-day"
            onClick={() => handleClick({ date: selectedImg.date })}
          />
        </div>
      )}
      <input
        type="date"
        value={date}
        onChange={handleDateChange}
        id="apod-date-input"
      />
    </section>
  );
};
