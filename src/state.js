export const initialState = {
  1: { id: 1, label: "Station 1", status: "idle", vehicle: null },
  2: { id: 2, label: "Station 2", status: "idle", vehicle: null },
  3: { id: 3, label: "Station 3", status: "idle", vehicle: null },
  4: { id: 4, label: "On Delivery Truck", status: "idle", vehicle: null },
  nextVehicle: 1,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_VEHICLE":
      return {
        ...state,
        1: { ...state[1], vehicle: state["nextVehicle"] },
        nextVehicle: state["nextVehicle"] + 1,
      };
    case "MOVE_VEHICLE":
        return {
            ...state,
            [action.current_station + 1]: {...state[action.current_station+1], vehicle: state[action.current_station].vehicle, status: "processing"},
            [action.current_station]: {...state[action.current_station], vehicle: null, status: "idle"}
        }
    default:
      throw new Error();
  }
};
