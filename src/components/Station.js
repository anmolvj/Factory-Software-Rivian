import React from "react";
import { StationContainer, StationLabel, Button } from "./styled";
import Vehicle from "./Vehicle";

const Station = (props) => {
  const {
    id,
    label,
    vehicle,
    handleAddVehicle,
    handleMoveVehicle,
    showAddButton,
    showMoveButton,
    handleVehicleStatusChange
  } = props;

  return (
    <StationContainer key={id}>
      <StationLabel>{label}</StationLabel>
      {showAddButton && <Button onClick={handleAddVehicle}>Add Vehicle</Button>}
      <Vehicle
        stationId={id}
        vehicle={vehicle}
        handleVehicleStatusChange={handleVehicleStatusChange}
        showMoveButton={showMoveButton}
        handleMoveVehicle={handleMoveVehicle}
      />
    </StationContainer>
  );
};

export default Station;
