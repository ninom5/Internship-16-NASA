import { useFetchMarsRovers } from "../../hooks";

export const MarsRoverPage = () => {
  const { photos, loading, error, nextPage, prevPage, currentPage } =
    useFetchMarsRovers();

  return (
    <div>
      <h1>Mars Rover Photos</h1>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {photos.length === 0 && !loading && <div>No photos available.</div>}

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

      <div style={{ marginTop: "20px" }}>
        <button onClick={prevPage} disabled={currentPage === 1 || loading}>
          Previous Page
        </button>
        <span style={{ margin: "0 15px" }}>Page {currentPage}</span>
        <button onClick={nextPage} disabled={loading}>
          Next Page
        </button>
      </div>
    </div>
  );
};
