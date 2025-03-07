import React, { useReducer, PropsWithChildren } from "react";
import { MapLocationContext } from "./MapLocationContext";
import { LatLngExpression } from "leaflet";

const initialState = {
  position: [43.508133, 16.440193] as LatLngExpression,
};

type LocationAction = { type: "SET_POSITION"; payload: LatLngExpression };

const locationReducer = (
  state: typeof initialState,
  action: LocationAction
) => {
  switch (action.type) {
    case "SET_POSITION":
      return { ...state, position: action.payload };
    default:
      return state;
  }
};

export const MapLocationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(locationReducer, initialState);

  const setPosition = (position: LatLngExpression) => {
    dispatch({ type: "SET_POSITION", payload: position });
  };

  return (
    <MapLocationContext.Provider
      value={{
        position: state.position,
        setPosition,
      }}
    >
      {children}
    </MapLocationContext.Provider>
  );
};
