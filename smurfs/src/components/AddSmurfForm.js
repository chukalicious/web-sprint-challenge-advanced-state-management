import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { getVillage } from "../actions";

const AddSmurfForm = (props) => {
  const [smurfForm, setSmurfForm] = useState({
    name: "",
    age: "",
    height: "",
    id: Date.now(),
  });

  const [newSmurfs, setNewSmurf] = useState([]);

  const handleChange = (e) => {
    setSmurfForm({ ...smurfForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", smurfForm)
      .then((res) => {
        setNewSmurf(res.data);
        props.getVillage();
        setSmurfForm({ name: "", age: "", height: "" });
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h2>Add a Smurf to the Village!</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter smurf name"
          name="name"
          value={smurfForm.name}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter smurf age"
          name="age"
          value={smurfForm.age}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter smurf height"
          name="height"
          value={smurfForm.height}
          onChange={handleChange}
        />
        <br />
        <button>Add Smurf!</button>
      </form>
    </div>
  );
};

export default connect(null, { getVillage })(AddSmurfForm);
