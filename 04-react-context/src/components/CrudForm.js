import React, { useState, useEffect, useContext } from "react";
import CrudContext from "../context/CrudContext";

const initialForm = {
  name: "",
  diameter: "",
  id: null,
};

const CrudForm = () => {
  const { createData, updateData, dataToEdit, setDataToEdit } =
    useContext(CrudContext);

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

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
      <h3> {dataToEdit ? "Edit the planet's data" : "Put a new planet"}</h3>
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
