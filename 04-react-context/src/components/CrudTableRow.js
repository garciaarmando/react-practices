import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";

export const CrudTableRow = ({ el }) => {
  const { setDataToEdit, deleteData } = useContext(CrudContext);
  let { name, diameter, id } = el;
  return (
    <tr>
      <td> {name} </td> <td> {diameter} </td>
      <td>
        <button onClick={() => setDataToEdit(el)}> Edit </button>{" "}
        <button onClick={() => deleteData(id)}> Delete </button>
      </td>
    </tr>
  );
};
