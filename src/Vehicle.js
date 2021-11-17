import React from "react";
import { STATUSES } from "./constants";
import {
  VehicleContainer,
  VehicleLabel,
  VehicleSelect,
  VehicleSelectOption,
  Button,
} from "./styled";

const Vehicle = ({
  stationId,
  vehicle,
  handleVehicleStatusChange,
  showMoveButton,
  handleMoveVehicle,
}) => {
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

      {stationId !== "4" && (
        <Button disabled={!showMoveButton} onClick={handleMoveVehicle}>
          Move to Next Station
        </Button>
      )}
    </VehicleContainer>
  );
};

export default Vehicle;
