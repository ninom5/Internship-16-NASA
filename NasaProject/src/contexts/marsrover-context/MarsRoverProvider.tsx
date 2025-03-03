import { FC, PropsWithChildren } from "react";
import { useFetchMarsRovers } from "../../hooks/MarsRoverHooks/useFetchMarsRovers";
import { MarsRoverContext } from "./MarsRoverContext";

export const MarsRoverProvider: FC<PropsWithChildren> = ({ children }) => {
  const state = useFetchMarsRovers();

  return (
    <MarsRoverContext.Provider value={state}>
      {children}
    </MarsRoverContext.Provider>
  );
};
