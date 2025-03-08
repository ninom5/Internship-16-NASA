import { Globe, AlertTriangle } from "lucide-react";
import { NearEarthObject } from "../../../types/NeoTypes/neoContextType";

export const NeoCard = ({ neo }: { neo: NearEarthObject }) => {
  return (
    <div
      key={neo.id}
      className="bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-lg transition hover:scale-[1.02]"
      id="neo-card"
    >
      <div className="flex items-center gap-3">
        <Globe className="text-white" size={20} />
        <h2 className="text-lg font-semibold text-white">{neo.name}</h2>
      </div>
      <p className="text-gray-400 text-sm mt-1">
        <span className="type-info"> Magnitude:</span>{" "}
        {neo.absolute_magnitude_h}
      </p>

      <p className="text-gray-400 text-sm">
        <span className="type-info">Estimated diameter: </span>
        {neo.estimated_diameter.kilometers.estimated_diameter_min} -{" "}
        {neo.estimated_diameter.kilometers.estimated_diameter_max} km
      </p>

      <p className="text-gray-400 text-sm">
        <span className="type-info"> Close approach date: </span>
        {neo.close_approach_data[0]?.close_approach_date_full}
      </p>

      <p className="text-gray-400 text-sm">
        <span className="type-info"> Velocity: </span>
        {
          neo.close_approach_data[0]?.relative_velocity.kilometers_per_second
        }{" "}
        km/s
      </p>

      <p className="text-gray-400 text-sm">
        <span className="type-info"> Distance: </span>{" "}
        {neo.close_approach_data[0]?.miss_distance.astronomical}
        {"  AU"} equivalent to{" "}
        {neo.close_approach_data[0]?.miss_distance.kilometers} km
      </p>

      <p className="text-gray-400 text-sm">
        <span className="type-info"> Sentry object: </span>
        {neo.is_sentry_object ? "Yes" : "No"}
      </p>

      {neo.is_potentially_hazardous_asteroid && (
        <div className="mt-2 flex items-center text-red-500">
          <AlertTriangle size={16} className="mr-1" />
          <span>Potentially Hazardous!</span>
        </div>
      )}
    </div>
  );
};
