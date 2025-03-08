import { createContext } from "react";
import { ApodData } from "types";

export interface ApodContextType {
  data: ApodData[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  startDate: Date;
  fetchMore: () => Promise<void>;
  dispatch?: React.Dispatch<any>;
}

export const ApodContext = createContext<ApodContextType>({
  data: [],
  loading: true,
  error: null,
  hasMore: true,
  startDate: new Date(),
  fetchMore: async () => {},
  dispatch: () => {},
});
