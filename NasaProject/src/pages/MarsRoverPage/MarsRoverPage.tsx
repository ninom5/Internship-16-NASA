import { useMarsRovers } from "../../hooks/MarsRoverHooks/useMarsRovers.ts";

export const MarsRoverPage = () => {
  const { rovers, loading, error } = useMarsRovers();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  if (!rovers || rovers.length === 0) return <div>No rovers available.</div>;

  return (
    <>
      <h1>mars</h1>
      {rovers.map((rover) => (
        <div key={rover.id}>
          <h2>Rover name{rover.name}</h2>
          <p>Launch date: {rover.launch_date}</p>
          <ul>
            {rover.cameras.map((camera) => (
              <li key={camera.id}>{camera.full_name}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
