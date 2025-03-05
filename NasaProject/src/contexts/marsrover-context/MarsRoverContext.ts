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
}

export interface RoverPhoto {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earthDate: string;
  rover: Rover;
}

export interface MarsRoverContextType {
  photos: RoverPhoto[];
  loading: boolean;
  error: string | null;
  fetchNextPage: () => void;
}

export const MarsRoverContext = createContext<MarsRoverContextType>({
  photos: [],
  loading: true,
  error: null,
  fetchNextPage: () => {},
});
