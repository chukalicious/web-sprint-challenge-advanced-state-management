import React from "react";
import { connect } from "react-redux";

const Village = (props) => {
  console.log("these are the props passed down to the village: ", props);
  return (
    <div>
      <h3>This is the Village</h3>
      {props.smurfs.map((smf) => (
        <div key={smf.id}>
          <p>Name: {smf.name}</p>
          <p>Age: {smf.age}</p>
          <p>Height: {smf.height}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurf,
  };
};
export default connect(mapStateToProps, {})(Village);
