import React, { useState } from "react";
import { connect } from "react-redux";
import { moveSmurf } from "../actions";

const AddSmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({});

  const handleChange = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
      id: Date.now(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.moveSmurf(newSmurf);
    setNewSmurf({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <div>
      <h2>Add a Smurf to the Village!</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter smurf name"
          name="name"
          value={newSmurf.name}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter smurf age"
          name="age"
          value={newSmurf.age}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter smurf height"
          name="height"
          value={newSmurf.height}
          onChange={handleChange}
        />
        <br />
        <button>Add Smurf!</button>
      </form>
    </div>
  );
};

export default connect(null, { moveSmurf })(AddSmurfForm);
