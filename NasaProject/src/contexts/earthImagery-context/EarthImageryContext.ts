import { createContext } from "react";
import { EarthImageryContextType } from "types";

export const EarthImageryContext = createContext<EarthImageryContextType>({
  imageUrl: "",
  loading: true,
  error: null,
});
