import React, { useEffect, useReducer, useState } from "react";
import { TYPES } from "../actions/crudActions";
import { helpHttp } from "../helpers/helpHttp";
import { crudInitialState, crudReducer } from "../reducers/crudReducer";
import CrudForm from "./CrudForm";
import { CrudTable } from "./CrudTable";
import { Loader } from "./Loader";
import { Message } from "./Message";

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
  // const [db, setDb] = useState(null);
  const [state, dispatch] = useReducer(crudReducer, crudInitialState);
  const { db } = state;
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp(),
    url = "http://localhost:5000/planets";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then(res => {
        if (!res.err) {
          dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
          setError(null);
        } else {
          dispatch({ type: TYPES.NO_DATA });
          setError(res);
        }
        setLoading(false);
      });
  }, [url]);

  const createData = data => {
    // data.id = Date.now();
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.post(url, options).then(res => {
      if (!res.err) {
        dispatch({ type: TYPES.CREATE_DATA, payload: res });
      } else {
        setError(res);
      }
    });
  };

  const updateData = data => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };
    api.put(endpoint, options).then(res => {
      // console.log(res);
      if (!res.err) {
        dispatch({ type: TYPES.UPDATE_DATA, payload: data });
        // let newData = db.map(el => (el.id === data.id ? data : el));
        // setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = id => {
    let isDelete = window.confirm(
      `Are you sure to delete the item with the id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };
      api.del(endpoint, options).then(res => {
        if (!res.err) {
          // let newData = db.filter(el => el.id !== id);
          // setDb(newData);
          dispatch({ type: TYPES.DELETE_DATA, payload: id });
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  return (
    <div>
      <h2> CRUD API </h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />

        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}

        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};
