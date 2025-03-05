import { useFetchNeo } from "../../hooks";

export const NeoPage = () => {
  const { data, error, loading } = useFetchNeo();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  console.log(data);

  return (
    <div className="neo-page">
      <h1>Neo Page</h1>
    </div>
  );
};
