import { useContext } from "react";
import { ApodContext } from "../../contexts";

export const useApod = () => {
  const context = useContext(ApodContext);

  if (!context) throw new Error("Error with useApod");

  return context;
};
