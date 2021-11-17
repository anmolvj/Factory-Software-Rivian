import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  font-family: Verdana, Geneva, sans-serif;
`;
export const ProductionLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;
export const StationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: lightblue;
  min-height: 350px;
  width: 300px;
  border-radius: 10px;
`;

export const VehicleContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50px;
  width: 80%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  background: lightpink;
`;

export const StationLabel = styled.h2``;
export const VehicleLabel = styled.h3``;

export const StationStatus = styled.h6``;

export const StationVehicle = styled.h6``;

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: ${(props) => (props.disabled ? "lightgrey" : "lightsalmon")};
  color: ${(props) => (props.disabled ? "grey" : "black")};
  font-weight: bold;
  border: 2px solid white;
`;

export const VehicleSelect = styled.select`
  margin: 10px;
  border-radius: 5px;
`;
export const VehicleSelectOption = styled.option``;
