import React, { useState, useEffect } from "react";

const initialForm = {
  name: "",
  diameter: "",
  id: null,
};
const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.diameter) {
      alert("Incomplete Data");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = e => {
    setForm(initialForm);
    setDataToEdit(null);
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
