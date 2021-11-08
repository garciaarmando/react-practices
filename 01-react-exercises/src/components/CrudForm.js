import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  diameter: "",
  id: null,
};
const CrudForm = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = e => {
    console.log("Change");
  };

  const handleSubmit = e => {
    e.preventDefaul();
    console.log("Submit");
  };

  const handleReset = e => {
    e.preventDefault();
    console.log("Reset");
  };

  return (
    <div>
      <h3>Put a new planet</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name of the planet"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="diameter"
          placeholder="Diameter of the planet"
          onChange={handleChange}
          value={form.diameter}
        />

        <input type="submit" value="Send" onClick={handleSubmit} />

        <input type="reset" value="Clear values" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
