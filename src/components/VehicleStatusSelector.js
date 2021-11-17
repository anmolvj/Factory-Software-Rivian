import React from "react";
import { STATUSES } from "../constants/statuses";
import { VehicleSelect, VehicleSelectOption } from "./styled";

const VehicleStatusSelector = (props) => {
  const { stationId, vehicle, handleVehicleStatusChange } = props;
  const options = [];
  if (stationId === "4") {
    options.push(STATUSES.SHIPPED);
  } else if (stationId === "3") {
    options.push(STATUSES.COMPLETED);
  } else {
    options.push(STATUSES.INPROGRESS, STATUSES.BLOCKED);
  }
  return (
    <VehicleSelect
      disabled={stationId === "3" || stationId === "4"}
      name="vehicle_status"
      id="vehicle_status"
      onChange={(event) => handleVehicleStatusChange(event.target.value)}
    >
      {options.map((option) => (
        <VehicleSelectOption value={option} selected={vehicle.state === option}>
          {option}
        </VehicleSelectOption>
      ))}
    </VehicleSelect>
  );
};

export default VehicleStatusSelector;
