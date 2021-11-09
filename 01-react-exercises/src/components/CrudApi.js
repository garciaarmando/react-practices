import React, { useState } from "react";

import CrudForm from "./CrudForm";
import { CrudTable } from "./CrudTable";

/* const initialDB = [
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
  {
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
  },
]; */

export const CrudApi = () => {
  const [db, setDB] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = data => {
    data.id = Date.now();
    // console.log(data);
    setDB([...db, data]);
  };

  const updateData = data => {
    let newData = db.map(el => (el.id === data.id ? data : el));

    setDB(newData);
  };

  const deleteData = id => {
    let isDelete = window.confirm(
      `Are you sure to delete the item with the id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter(el => el.id !== id);
      setDB(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2> CRUD App </h2>
      <article className="grid-1-2">
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
      </article>
    </div>
  );
};
