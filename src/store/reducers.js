import { STATUSES } from "../constants/statuses";
import { createVehicle } from "./helper";

export const addVehicleReducer = (state) => {
  const station = 1;
  return {
    ...state,
    [station]: { ...state[station], vehicle: createVehicle(state.nextVehicleId, station) },
    nextVehicle: state["nextVehicleId"] + 1,
  };
};

export const moveVehicleReducer = (state, current_station) => {
  const next_station = parseInt(current_station) + 1;
  const vehicle = createVehicle(
    state[current_station].vehicle.id,
    next_station
  );

  return {
    ...state,
    [current_station]: { ...state[current_station], vehicle: null },
    [next_station]: { ...state[next_station], vehicle },
  };
};

export const updateVehicleStatusReducer = (state, station, newState) => {
  return {
    ...state,
    [station]: {
      ...state[station],
      vehicle: { ...state[station].vehicle, state: STATUSES[newState] },
    },
  };
};


