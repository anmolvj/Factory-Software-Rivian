import React, { useReducer } from "react";
import { ProductionLine } from "./components/styled";
import { initialState, reducer } from "./store/index";
import Station from "./components/Station";
import { STATUSES } from "./constants/statuses";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddVehicle = (key) => () =>
    key === "1" ? dispatch({ type: "ADD_VEHICLE" }) : null;

  const handleMoveVehicle = (key) => () =>
    dispatch({ type: "MOVE_VEHICLE", current_station: parseInt(key) });

  const handleVehicleStatusChange = (key) => (newStatus) => {
    dispatch({
      type: "UPDATE_VEHICLE_STATUS",
      current_station: parseInt(key),
      newStatus,
    });
  };
  return (
    <div className="App">
      <ProductionLine>
        {Object.entries(state).map(([key, value]) =>
          key !== "nextVehicle" ? (
            <Station
              {...value}
              id={key}
              dispatch={dispatch}
              state={state}
              handleAddVehicle={handleAddVehicle(key)}
              handleMoveVehicle={handleMoveVehicle(key)}
              showAddButton={key === "1" && value.vehicle === null}
              showMoveButton={
                value.vehicle !== null &&
                key !== "4" &&
                value.vehicle.state !== STATUSES.BLOCKED &&
                state[parseInt(key) + 1].vehicle === null
              }
              handleVehicleStatusChange={handleVehicleStatusChange(key)}
            />
          ) : null
        )}
        {console.log(state)}
      </ProductionLine>
    </div>
  );
};

export default App;
