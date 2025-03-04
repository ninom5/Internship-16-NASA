import { useContext } from "react";
import { MarsRoverContext } from "../../contexts";

export const useMarsRovers = () => {
  const context = useContext(MarsRoverContext);

  if (!context) throw new Error("Error with mars images");

  return context;
};
