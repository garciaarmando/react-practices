import React from "react";

const CrudForm = () => {
  return (
    <div>
      <h3>Put a new planet</h3>
      <form>
        <input type="text" name="name" placeholder="Name of the planet" />
        <input
          type="text"
          name="diameter"
          placeholder="Diameter of the planet"
        />
      </form>
    </div>
  );
};

export default CrudForm;
