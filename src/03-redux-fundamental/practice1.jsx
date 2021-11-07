import React, { useEffect, useState } from "react";
import { createStore } from "redux";

export const Practice1 = () => {
  const store = createStore(reducer);
  const [persons, setPersons] = useState([]);
  store.subscribe(() => {
    console.log("storeChanged");
    setPersons(store.getState());
  });
  const addPerson = () => {
    store.dispatch({
      type: "addPerson",
      payload: {
        id: 1,
        fullName: "Omid Mohebbi",
        description: " test description"
      }
    });

    console.log(store.getState());
  };
  const removePerson = () => {
    store.dispatch({
      type: "removePerson",
      payload: {
        id: 1
      }
    });

    console.log(store.getState());
  };
  return (
    <div className="p-2 ">
      <button className="btn btn-primary" onClick={addPerson}>
        {" "}
        Add a person into the store
      </button>
      <button className="btn btn-danger mx-1" onClick={removePerson}>
        {" "}
        remove a person from the store
      </button>

      <div className="d-flex flex-column mt-2 bg-success p-2">
        {persons.map((x) => (
          <div key={x.id}>
            {x.id} {":  " + x.fullName}
          </div>
        ))}
      </div>
    </div>
  );
};

function reducer(state = [], action) {
  if (action.type === "addPerson") {
    return [
      ...state,
      {
        id: action.payload.id,
        fullName: action.payload.fullName,
        description: action.payload.description
      }
    ];
  } else if (action.type === "removePerson") {
    return state.filter((x) => x.id !== action.payload.id);
  } else {
    return state;
  }
}
