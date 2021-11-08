import React, { useState } from "react";

import CrudForm from "./CrudForm";
import { CrudTable } from "./CrudTable";

const initialDB = [
  {
    id: 1,
    name: "Mercury",
    diameter: "4879.4 km",
  },
  {
    id: 2,
    name: "Venus",
    diameter: "12104 km",
  },
  {
    id: 3,
    name: "Earth",
    diameter: "12742 km",
  },
  {
    id: 4,
    name: "Mars",
    diameter: "6779 km",
  },
  /* {
    id: 5,
    name: "Jupiter",
    diameter: "139820 km",
  },
  {
    id: 6,
    name: "Saturn",
    diameter: "116460 km",
  },
  {
    id: 7,
    name: "Uranus",
    diameter: "50724 km",
  },
  {
    id: 8,
    name: "Neptune",
    diameter: "49244 km",
  }, */
];

const CrudApp = () => {
  const [db, setDB] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = data => {
    data.id = Date.now();
    // console.log(data);
    setDB([...db, data]);
  };

  const updateData = data => {};

  const deleteData = id => {};

  return (
    <div>
      <h2>CRUD App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </div>
  );
};

export default CrudApp;
