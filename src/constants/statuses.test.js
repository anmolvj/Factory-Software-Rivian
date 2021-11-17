import { STATUSES } from "./statuses";

describe("STATUSES", () => {
  test(".INPROGRESS should be 'in progress'", () => {
    expect(STATUSES.INPROGRESS).toBe("in progress");
  });
  test(".BLOCKED should be 'blocked'", () => {
    expect(STATUSES.BLOCKED).toBe("blocked");
  });
  test(".COMPLETED should be 'completed'", () => {
    expect(STATUSES.COMPLETED).toBe("completed");
  });
  test(".SHIPPED should be 'shipped'", () => {
    expect(STATUSES.SHIPPED).toBe("shipped");
  });
});
