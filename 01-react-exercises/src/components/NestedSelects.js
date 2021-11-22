import React, { useState } from "react";
import SelectList from "./SelectList";

const NestedSelects = () => {
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [suburb, setSuburb] = useState("");

  const TOKEN =
    "77f0a365-d4b1-48d7-a149-1b08170e076"; /* "77f0a365-d4b1-48d7-a149-1b08170e0769"; */

  return (
    <div>
      <h2>Nested Selects</h2>
      <h3>México</h3>

      <SelectList
        title="estado"
        url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
        handleChange={e => {
          setState(e.target.value);
        }}
      />

      {state && (
        <SelectList
          title="municipios"
          url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}

`}
          handleChange={e => {
            setTown(e.target.value);
          }}
        />
      )}

      {town && (
        <SelectList
          title="colonia"
          url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
          handleChange={e => {
            setSuburb(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {state} - {town} - {suburb}
        </code>
      </pre>
    </div>
  );
};

export default NestedSelects;
