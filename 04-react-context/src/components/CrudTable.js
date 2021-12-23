import React, { useContext } from "react";
import CrudContext from "../context/CrudContext";
import { CrudTableRow } from "./CrudTableRow";

export const CrudTable = () => {
  const { db: data } = useContext(CrudContext);
  return (
    <div>
      <h3> Data Table </h3>
      <table>
        <thead>
          <tr>
            <th> Name </th> <th> Diameter </th> <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map(el => <CrudTableRow key={el.id} el={el} />)
          ) : (
            <tr>
              <td colSpan="3"> No data avaliable </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
