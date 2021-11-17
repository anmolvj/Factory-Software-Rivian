import React from "react";
import { STATUSES } from "./constants";
import {
  StationBox,
  StationLabel,
  Button,
  VehicleContainer,
  VehicleLabel,
  VehicleSelect,
  VehicleSelectOption,
} from "./StyledComponents";

const Vehicle = ({ vehicle, handleVehicleStatusChange }) => {
  return (
    vehicle && (
      <VehicleContainer>
        <VehicleLabel>Vehicle #{vehicle.id}</VehicleLabel>

        <VehicleSelect name="vehicle_status" id="vehicle_status" onChange={event => handleVehicleStatusChange(event.target.value)}>
          {Object.entries(STATUSES).map(([key, value]) => (
            <VehicleSelectOption value={key} selected={vehicle.state === value}>{value}</VehicleSelectOption>
          ))}
        </VehicleSelect>
      </VehicleContainer>
    )
  );
};

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
    <StationBox key={id}>
      <StationLabel>{label}</StationLabel>
      <Vehicle vehicle={vehicle} handleVehicleStatusChange={handleVehicleStatusChange}/>
      {showAddButton && <Button onClick={handleAddVehicle}>Add Vehicle</Button>}
      {showMoveButton && (
        <Button onClick={handleMoveVehicle}>Move to Next Station</Button>
      )}
    </StationBox>
  );
};

export default Station;
