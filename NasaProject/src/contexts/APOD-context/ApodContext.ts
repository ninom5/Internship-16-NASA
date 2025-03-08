import { createContext } from "react";

export interface ApodData {
  mediaUrl: string | null;
  description: string;
  date: string;
  mediaType: string;
  title: string;
  hdurl: string;
  thumbnail_url: string | null;
}

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
