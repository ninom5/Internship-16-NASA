import { useState, useEffect } from "react";
import { useApod } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ApodImage: React.FC = () => {
  const { data, loading, error } = useApod();
  const navigate = useNavigate();

  const currentDate = new Date().toISOString().split("T")[0];

  const [date, setDate] = useState(currentDate);
  const [selectedImg, setSelectedImg] = useState(() =>
    data?.find((img) => img.date === currentDate)
  );

  useEffect(() => {
    setSelectedImg(data.find((img) => img.date === date));
    console.log(selectedImg);
  }, [date, data]);

  const handleClick = ({ date }: { date: string }) => {
    navigate(`/astronomy/${date}`);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value.toString();
    if (newDate > currentDate) {
      toast.error("Date can't be in future");
      return;
    }

    setDate(newDate);
  };

  let todayImg = data.find((img) => img.date === currentDate);

  if (loading) return <div>loading</div>;

  if (error) return <div>error: {error}</div>;

  return (
    <section className="apod-section">
      <h1>APOD: Astronomy Picture of the Day</h1>
      {todayImg && (
        <div className="image-container">
          <img
            src={selectedImg?.mediaUrl ?? undefined}
            alt="Astronomy picture of the day"
            id="image-of-the-day"
            onClick={() =>
              todayImg && handleClick({ date: todayImg.date ?? "" })
            }
          />
        </div>
      )}
      <input type="date" value={date} onChange={handleDateChange} />
    </section>
  );
};
