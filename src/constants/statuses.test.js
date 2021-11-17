import { STATUSES } from "./statuses";

describe("STATUSES", () => {
  test(".INPROGRESS should be 'in progress'", () => {
    expect(STATUSES.INPROGRESS).toBe("in progress");
  });
  test(".BLOCKED should be 'in progress'", () => {
    expect(STATUSES.BLOCKED).toBe("blocked");
  });
  test(".COMPLETED should be 'in progress'", () => {
    expect(STATUSES.COMPLETED).toBe("completed");
  });
  test(".SHIPPED should be 'in progress'", () => {
    expect(STATUSES.SHIPPED).toBe("shipped");
  });
});
