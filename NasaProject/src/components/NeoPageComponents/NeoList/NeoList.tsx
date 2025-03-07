import { Rocket } from "lucide-react";
import { NeoCard } from "@components/index";
import { NearEarthObject } from "../../../types/neoContextType";
import { withLoading } from "@hoc/withLoading";

const NeoList = ({ neoList }: { neoList: NearEarthObject[] }) => {
  return (
    <div className="max-w-4xl mx-auto p-6" id="neo-list">
      <div className="flex items-center gap-3 mb-6" id="neo-list-header">
        <Rocket size={50} className="text-blue-500" />
        <h1 className="text-3xl font-bold text-white" id="neo-list-heading">
          Near-Earth Objects (last 2 days)
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {neoList.map((neo: NearEarthObject) => {
          return <NeoCard key={neo.id} neo={neo} />;
        })}
      </div>
    </div>
  );
};

export default withLoading(NeoList);
