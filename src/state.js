import { STATUSES } from "./constants";

export const initialState = {
  1: { id: 1, label: "Station 1", vehicle: null },
  2: { id: 2, label: "Station 2", vehicle: null },
  3: { id: 3, label: "Station 3", vehicle: null },
  4: { id: 4, label: "On Delivery Truck", vehicle: null },
  nextVehicle: 1,
};

const createVehicle = (id, station) => {
  let state;
  if (station === 1 || station === 2) state = STATUSES.INPROGRESS;
  else if (station === 3) state = STATUSES.COMPLETED;
  else state = STATUSES.SHIPPED;

  console.log("NEW VEHICLE CREATED");
  console.log("Station = ", station);
  console.log("Vehicle status = ", state);
  return { id, state };
};

const addVehicleReducer = (state) => {
  return {
    ...state,
    1: { ...state[1], vehicle: createVehicle(state.nextVehicle, 1) },
    nextVehicle: state["nextVehicle"] + 1,
  };
};

const updateVehicleStatusReducer = (state, station, newState) => {
  return {
    ...state,
    [station]: {
      ...state[station],
      vehicle: { ...state[station].vehicle, state: STATUSES[newState] },
    },
  };
};

const moveVehicleReducer = (state, current_station) => {
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

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_VEHICLE":
      return addVehicleReducer(state);
    case "MOVE_VEHICLE":
      return moveVehicleReducer(state, action.current_station);
    case "UPDATE_VEHICLE_STATUS":
      return updateVehicleStatusReducer(
        state,
        action.current_station,
        action.newStatus
      );
    default:
      throw new Error();
  }
};
