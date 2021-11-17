import React from "react";
import { STATUSES } from "./constants";
import {
  VehicleContainer,
  VehicleLabel,
  VehicleSelect,
  VehicleSelectOption,
} from "./styled";


const Vehicle = ({ stationId, vehicle, handleVehicleStatusChange }) => {
  if (!vehicle) return null;

  return (
    <VehicleContainer>
      <VehicleLabel>Vehicle #{vehicle.id}</VehicleLabel>

      <VehicleSelect
        disabled={stationId === "3" || stationId === "4"}
        name="vehicle_status"
        id="vehicle_status"
        onChange={(event) => handleVehicleStatusChange(event.target.value)}
      >
        {Object.entries(STATUSES).map(([key, value]) => (
          <VehicleSelectOption value={key} selected={vehicle.state === value}>
            {value}
          </VehicleSelectOption>
        ))}
      </VehicleSelect>
    </VehicleContainer>
  );
};

export default Vehicle;
