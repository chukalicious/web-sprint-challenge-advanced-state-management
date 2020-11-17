import React, { useState } from "react";

const AddSmurfForm = () => {
  const [smurf, setSmurf] = useState({});
  console.log("local state in form: ", smurf);

  const handleChange = (e) => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //move smurf action
    setSmurf({
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
          value={smurf.name}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter smurf age"
          name="age"
          value={smurf.age}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Enter smurf height"
          name="height"
          value={smurf.height}
          onChange={handleChange}
        />
        <br />
        <button>Add Smurf!</button>
      </form>
    </div>
  );
};

export default AddSmurfForm;
