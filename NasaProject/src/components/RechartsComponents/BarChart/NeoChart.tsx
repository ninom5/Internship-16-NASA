import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useNeo } from "../../../hooks";

export const NeoChart = () => {
  const { data: neoData } = useNeo();

  const formattedData = neoData?.near_earth_objects
    ? Object.values(neoData.near_earth_objects)
        .flat()
        .map((neo) => ({
          name: neo.name,
          velocity:
            neo.close_approach_data[0]?.relative_velocity
              .kilometers_per_second || 0,
          diameter:
            neo.estimated_diameter.kilometers.estimated_diameter_max || 0,
        }))
    : [];

  return (
    <div className="bg-gray-900 p-6 mt-8 rounded-lg" id="neo-bar-chart">
      <h3
        className="text-white text-xl font-semibold mb-4"
        id="neo-chart-title"
      >
        NEO Data Velocity and Diameter Chart
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={Array.isArray(formattedData) ? formattedData : []}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="velocity" fill="#8884d8" name="Velocity (km/s)" />

          <Bar dataKey="diameter" fill="#82ca9d" name="Diameter (km)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
