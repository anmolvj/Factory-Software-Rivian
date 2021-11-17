import { STATUSES } from "../constants/statuses";

export const createVehicle = (id, station) => {
  let state;
  if (station === 1 || station === 2) state = STATUSES.INPROGRESS;
  else if (station === 3) state = STATUSES.COMPLETED;
  else state = STATUSES.SHIPPED;

  return { id, state };
};
