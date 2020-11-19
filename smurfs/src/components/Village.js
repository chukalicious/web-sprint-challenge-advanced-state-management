import React from "react";
import { connect } from "react-redux";
import { getVillage } from "../actions";

const Village = (props) => {
  console.log("these are the props passed down to the village: ", props);
  return (
    <div>
      <h3>This is the Village</h3>
      <button onClick={() => props.getVillage()}>Populate the Village!</button>
      {props.isLoading ? (
        <div>
          <h2> *** Loading *** </h2>
        </div>
      ) : props.error ? (
        <div style={{ color: "red" }}>{props.error}</div>
      ) : (
        props.village.map((smurf) => (
          <div key={smurf.id}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        ))
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    village: state.village,
    isLoading: state.isLoading,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getVillage })(Village);
