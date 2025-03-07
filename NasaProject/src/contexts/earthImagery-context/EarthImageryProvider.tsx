import { FC, PropsWithChildren } from "react";
import { EarthImageryContext } from "./EarthImageryContext";
import { useFetchEarthImagery } from "@hooks/index";
import { useMap } from "@hooks/index";
import { LatLngTuple } from "leaflet";

export const EarthImageryProvider: FC<PropsWithChildren> = ({ children }) => {
  const { position } = useMap();
  const state = useFetchEarthImagery(position as LatLngTuple);

  return (
    <EarthImageryContext.Provider value={state}>
      {children}
    </EarthImageryContext.Provider>
  );
};
