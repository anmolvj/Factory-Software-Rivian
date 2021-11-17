import React from "react";
import { VehicleContainer, VehicleLabel, Button } from "./styled";
import VehicleStatusSelector from "./VehicleStatusSelector";

const Vehicle = (props) => {
  const {
    stationId,
    vehicle,
    handleVehicleStatusChange,
    showMoveButton,
    handleMoveVehicle
  } = props;

  if (!vehicle) return null;

  return (
    <VehicleContainer>
      <VehicleLabel>Vehicle #{vehicle.id}</VehicleLabel>
      <VehicleStatusSelector
        stationId={stationId}
        vehicle={vehicle}
        handleVehicleStatusChange={handleVehicleStatusChange}
      />

      {stationId !== "4" && (
        <Button disabled={!showMoveButton} onClick={handleMoveVehicle}>
          Move to Next Station
        </Button>
      )}
    </VehicleContainer>
  );
};

export default Vehicle;
