import { FC, PropsWithChildren } from "react";
import { ApodContext } from "./ApodContext";
import { useFetchApod } from "../../hooks/useFetchApod";

export const ApodProvider: FC<PropsWithChildren> = ({ children }) => {
  const state = useFetchApod();

  return <ApodContext.Provider value={state}>{children}</ApodContext.Provider>;
};
