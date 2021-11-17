import styled from "styled-components";

export const ProductionLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
`;
export const StationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: lightgreen;
  height: auto;
  width: 250px;
  border-radius: 10px;
  font-family: Verdana, Geneva, sans-serif;
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
  background: ${(props) => (props.vehicle ? "lightgrey" : "lightpink")};
`;

export const StationLabel = styled.h3``;
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

export const VehicleSelect = styled.select``;
export const VehicleSelectOption = styled.option``;
