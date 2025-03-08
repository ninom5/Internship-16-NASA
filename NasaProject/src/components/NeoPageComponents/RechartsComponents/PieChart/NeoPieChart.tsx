import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";
import { useNeo } from "@hooks/index";
import { COLORS } from "@constants/colors.ts";

export const NeoPieChart: React.FC = () => {
  const { data: neoData } = useNeo();

  const count = { hazardous: 0, nonHazardous: 0 };

  if (neoData?.near_earth_objects) {
    Object.values(neoData.near_earth_objects)
      .flat()
      .forEach((neo) => {
        if (neo.is_potentially_hazardous_asteroid) {
          count.hazardous += 1;
        } else {
          count.nonHazardous += 1;
        }
      });
  }

  const formattedData = [
    { name: "Hazardous", value: count.hazardous },
    { name: "Non-Hazardous", value: count.nonHazardous },
  ];

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg rounded-2xl bg-white p-5 mt-5">
      <CardContent>
        <Typography
          variant="h6"
          className="text-center font-bold text-gray-800 mb-4"
        >
          Hazardous vs. Non-Hazardous NEOs
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={formattedData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
              dataKey="value"
            >
              {formattedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
