import {
  addVehicleReducer,
  moveVehicleReducer,
  updateVehicleStatusReducer,
} from "./reducers";

export const initialState = {
  1: { id: 1, label: "Station 1", vehicle: null },
  2: { id: 2, label: "Station 2", vehicle: null },
  3: { id: 3, label: "Station 3", vehicle: null },
  4: { id: 4, label: "On Delivery Truck", vehicle: null },
  nextVehicle: 1,
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
