import { PropsWithChildren, FC } from "react";
import { NeoContext } from "./NeoContext";
import { useFetchNeo } from "@hooks/index";

export const NeoProvider: FC<PropsWithChildren> = ({ children }) => {
  const state = useFetchNeo();

  return <NeoContext.Provider value={state}>{children}</NeoContext.Provider>;
};
