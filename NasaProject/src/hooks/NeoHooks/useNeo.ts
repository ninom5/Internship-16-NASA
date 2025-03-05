import { useContext } from "react";
import { NeoContext } from "../../contexts";

export const useNeo = () => {
  const context = useContext(NeoContext);

  if (!context) throw new Error("Error with neo data");

  return context;
};
