import React, { useReducer } from "react";
import { ProductionLineContainer, Main } from "./styled";
import { initialState, reducer } from "../store/index";
import Station from "./Station";
import { STATUSES } from "../constants/statuses";

const ProductionLine = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddVehicle = (key) => () =>
    key === "1" ? dispatch({ type: "ADD_VEHICLE" }) : null;

  const handleMoveVehicle = (key) => () =>
    dispatch({ type: "MOVE_VEHICLE", current_station: parseInt(key) });

  const handleVehicleStatusChange = (key) => (newStatus) => {
    dispatch({
      type: "UPDATE_VEHICLE_STATUS",
      current_station: parseInt(key),
      newStatus
    });
  };

  const shouldWeShowMoveButton = (key, value) => {
    if (
      value.vehicle === null ||
      key === "4" ||
      value.vehicle.state === STATUSES.BLOCKED
    )
      return false;

    return key === "3" ? true : state[parseInt(key) + 1].vehicle === null;
  };

  return (
    <Main>
      <h1>EV Production Line Visualizer</h1>
      <ProductionLineContainer>
        {Object.entries(state).map(([key, value]) =>
          key !== "nextVehicle" ? (
            <Station
              {...value}
              id={key}
              key={key}
              dispatch={dispatch}
              state={state}
              handleAddVehicle={handleAddVehicle(key)}
              handleMoveVehicle={handleMoveVehicle(key)}
              showAddButton={key === "1" && value.vehicle === null}
              showMoveButton={shouldWeShowMoveButton(key, value)}
              handleVehicleStatusChange={handleVehicleStatusChange(key)}
            />
          ) : null
        )}
      </ProductionLineContainer>
    </Main>
  );
};

export default ProductionLine;
