import { createVehicle } from "./helpers";
import { STATUSES } from "../constants/statuses";

describe("createVehicle", () => {
  test("should return id of the vehicle'", () => {
    expect(createVehicle(1, 2).id).toBe(1);
  });
  test(`should set state to ${STATUSES.INPROGRESS} for station 1 and 2`, () => {
    expect(createVehicle(1, 1).state).toBe(STATUSES.INPROGRESS);
    expect(createVehicle(1, 2).state).toBe(STATUSES.INPROGRESS);
  });
  test(`should set state to ${STATUSES.COMPLETED} for station 3`, () => {
    expect(createVehicle(1, 3).state).toBe(STATUSES.COMPLETED);
  });

  test(`should set state to ${STATUSES.SHIPPED} for station 4`, () => {
    expect(createVehicle(1, 4).state).toBe(STATUSES.SHIPPED);
  });
});
