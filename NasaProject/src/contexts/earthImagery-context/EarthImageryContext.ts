import { createContext } from "react";
import { EarthImageryContextType } from "../../types/earthImageryContextType";

export const EarthImageryContext = createContext<EarthImageryContextType>({
  data: [],
  loading: true,
  error: null,
});
