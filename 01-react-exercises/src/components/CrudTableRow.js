import React from "react";

export const CrudTableRow = ({ el }) => {
  return (
    <tr>
      <td> {el.name} </td> <td> {el.diameter} </td>
      <td>
        <button> Edit </button> <button> Delete </button>
      </td>
    </tr>
  );
};
