import React from "react";
import { StationBox, StationLabel, Button } from "./styled";
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
    handleVehicleStatusChange,
  } = props;
  return (
    <StationBox key={id}>
      <StationLabel>{label}</StationLabel>
      <Vehicle
        stationId={id}
        vehicle={vehicle}
        handleVehicleStatusChange={handleVehicleStatusChange}
        showMoveButton={showMoveButton}
        handleMoveVehicle={handleMoveVehicle}
      />
      {showAddButton && <Button onClick={handleAddVehicle}>Add Vehicle</Button>}
    </StationBox>
  );
};

export default Station;
