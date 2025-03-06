import { FC, PropsWithChildren, use } from "react";
import { EarthImageryContext } from "./EarthImageryContext";
import { useFetchEarthImagery } from "../../hooks";

export const EarthImageryProvider: FC<PropsWithChildren> = ({ children }) => {
  const state = useFetchEarthImagery();

  return (
    <EarthImageryContext.Provider value={state}>
      {children}
    </EarthImageryContext.Provider>
  );
};
