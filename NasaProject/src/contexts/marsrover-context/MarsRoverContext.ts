import { createContext } from "react";

export interface Camera {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

export interface Rover {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: number;
  total_photos: number;
  cameras: Camera[];
}

export interface MarsRoverContextType {
  rovers: Rover[];
  loading: boolean;
  error: string | null;
}

export const MarsRoverContext = createContext<MarsRoverContextType>({
  rovers: [],
  loading: true,
  error: null,
});
