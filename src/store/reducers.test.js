import {
  addVehicleReducer,
  updateVehicleStatusReducer,
  moveVehicleReducer
} from "./reducers";

describe("addVehicleReducer", () => {
  const state = {
    1: {},
    nextVehicle: 1
  };
  test("should increment state.nextVehicle by one in the returned state", () => {
    expect(addVehicleReducer(state).nextVehicle).toBe(state.nextVehicle + 1);
  });

  test("should add a vehicle to the first station", () => {
    expect(addVehicleReducer(state)[1].vehicle).toBeDefined();
  });
});

describe("updateVehicleStatusReducer", () => {
  const state = {
    1: {
      vehicle: {
        state: "in progress"
      }
    },
    nextVehicle: 1
  };
  test("should update the vehicle status to blocked", () => {
    expect(
      updateVehicleStatusReducer(state, 1, "blocked")[1].vehicle.state
    ).toBe("blocked");
  });
});

describe("moveVehicleReducer", () => {
  const state = {
    1: {
      vehicle: {
        state: "in progress"
      }
    },
    2: {},
    nextVehicle: 1
  };
  test("should move the vehicle into next stations", () => {
    expect(moveVehicleReducer(state, 1)[2].vehicle).toEqual(state[1].vehicle);
    expect(moveVehicleReducer(state, 1)[1].vehicle).toBeNull();
  });
});
