import { ACTIONS } from "./actions";

describe("ACTIONS", () => {
  test(".ADD_VEHICLE should be 'ADD_VEHICLE'", () => {
    expect(ACTIONS.ADD_VEHICLE).toBe("ADD_VEHICLE");
  });
  test(".MOVE_VEHICLE should be 'MOVE_VEHICLE'", () => {
    expect(ACTIONS.MOVE_VEHICLE).toBe("MOVE_VEHICLE");
  });
  test(".UPDATE_VEHICLE_STATUS should be 'UPDATE_VEHICLE_STATUS'", () => {
    expect(ACTIONS.UPDATE_VEHICLE_STATUS).toBe("UPDATE_VEHICLE_STATUS");
  });
});