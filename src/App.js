import React, { useReducer } from "react";
import { ProductionLine, StationBox } from "./StyledComponents";
import { initialState, reducer } from "./state";

const Station = ({ id, label, status, vehicle, dispatch, state }) => {
  return (
    <StationBox>
      {/* LABEL */}
      <h3>{label}</h3>

      {/* STATUS */}
      <h5>status: {status}</h5>

      {/* ADD VEHICLE */}
      {id === "1" && vehicle === null ? (
        <div>
          <button onClick={() => dispatch({ type: "ADD_VEHICLE" })}>
            Add Vehicle
          </button>
        </div>
      ) : null}

      {/* SHOW VEHICLE */}
      { vehicle !== null && <h5>Vehicle #{vehicle}</h5>}

      {/* ALLOW MOVE VEHICLE IF: 1. Not already in truck, 2. Next station is empty */}
      {vehicle !== null && id !== "4" && state[parseInt(id)+1].vehicle === null && <button onClick={() => dispatch({type: "MOVE_VEHICLE", current_station: parseInt(id)})}>Move to Next Station</button>}
      
    </StationBox>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="App">
      <ProductionLine>
        {Object.entries(state).map(([key, value]) =>
          key !== "nextVehicle" ? (
            <Station {...value} id={key} dispatch={dispatch} state={state}/>
          ) : null
        )}
      </ProductionLine>
    </div>
  );
}

export default App;
