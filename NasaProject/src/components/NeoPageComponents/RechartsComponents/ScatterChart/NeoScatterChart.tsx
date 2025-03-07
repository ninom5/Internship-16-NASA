import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNeo } from "../../../../hooks";

export const NeoScatterChart = () => {
  const { data: neoData } = useNeo();

  const formattedData = neoData?.near_earth_objects
    ? Object.values(neoData.near_earth_objects)
        .flat()
        .map((neo) => ({
          x:
            neo.close_approach_data[0]?.relative_velocity
              .kilometers_per_second || 0,
          y: neo.estimated_diameter.kilometers.estimated_diameter_max || 0,
        }))
    : [];

  const xDomain = [
    Math.min(...formattedData.map((d) => Number(d.x))),
    Math.max(...formattedData.map((d) => Number(d.x))),
  ];
  const yDomain = [
    Math.min(...formattedData.map((d) => Number(d.y))),
    Math.max(...formattedData.map((d) => Number(d.y))),
  ];

  return (
    <>
      <h2 id="scatter-chart-title">NEO Objects: Velocity vs Diameter</h2>
      <ResponsiveContainer width="90%" height={500} id={"neo-scatter-chart"}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />

          <XAxis
            type="number"
            dataKey="x"
            name="Velocity"
            unit="km/s"
            domain={xDomain}
          />
          <YAxis
            type="number"
            dataKey="y"
            name="Diameter"
            unit="km"
            domain={yDomain}
          />

          <Tooltip cursor={{ strokeDasharray: "3 3" }} />

          <Scatter
            name="NEO Objects: Velocity vs Diameter"
            data={Array.isArray(formattedData) ? formattedData : []}
            fill="#8884d8"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </>
  );
};
