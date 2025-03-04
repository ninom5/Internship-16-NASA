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
}

export const ApodContext = createContext<ApodContextType>({
  data: [],
  loading: true,
  error: null,
});
