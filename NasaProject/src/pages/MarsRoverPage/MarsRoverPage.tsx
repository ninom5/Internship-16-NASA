import { useMarsRovers } from "../../hooks";
export const MarsRoverPage = () => {
  const { photos, loading, error, fetchNextPage } = useMarsRovers();

  if (loading && photos.length === 0) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!photos || photos.length === 0) return <div>No rovers available.</div>;

  return (
    <>
      <h1>Mars Rover Photos</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
        }}
      >
        {photos.map((photo) => (
          <div key={photo.id}>
            <img
              src={photo.img_src}
              alt={`Mars Rover ${photo.rover.name}`}
              width="200px"
            />
          </div>
        ))}
      </div>
      <button onClick={fetchNextPage} disabled={loading} id="next-page-btn">
        Next Page
      </button>
    </>
  );
};
