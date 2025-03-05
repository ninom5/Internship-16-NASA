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
  earth_date: string;
  rover: Rover;
}

export interface MarsRoverContextType {
  // photosByPage: { [page: number]: RoverPhoto[] };
  photos: RoverPhoto[];
  // currentPage: number;
  loading: boolean;
  error: string | null;
  // fetchNextPage: () => void;
  // fetchPreviousPage: () => void;
}

export const MarsRoverContext = createContext<MarsRoverContextType>({
  photos: [],
  // currentPage: 1,
  loading: true,
  error: null,
  // fetchNextPage: () => {},
  // fetchPreviousPage: () => {},
});
