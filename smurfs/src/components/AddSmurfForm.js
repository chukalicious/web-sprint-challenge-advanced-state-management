import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { postSmurf } from "../actions";

const AddSmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({});
  useEffect(() => {
    axios.post("http://localhost:3333/smurfs", newSmurf).then((res) => {
      setNewSmurf();
    });
  }, [newSmurf]);

  const handleChange = (e) => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value,
      id: Date.now(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.postSmurf(newSmurf);
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

export default connect(null, { postSmurf })(AddSmurfForm);
