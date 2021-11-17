import { createVehicle } from "./helpers";

export const addVehicleReducer = (state) => {
  return {
    ...state,
    1: { ...state[1], vehicle: createVehicle(state.nextVehicle, 1) },
    nextVehicle: state["nextVehicle"] + 1
  };
};

export const updateVehicleStatusReducer = (state, station, newStatus) => {
  return {
    ...state,
    [station]: {
      ...state[station],
      vehicle: { ...state[station].vehicle, state: newStatus }
    }
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
    [next_station]: { ...state[next_station], vehicle }
  };
};
