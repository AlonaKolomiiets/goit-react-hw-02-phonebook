import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  name: "",
  number: "",
};

const HookForm = ({ addContact, uniqueContact }) => {
  const [{ name, number }, setForm] = useState({
    ...initialState,
  });

  const inputHandler = ({ target }) => {
    const { value, name } = target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const contact = {
      name,
      number,
      id: uuidv4(),
    };
    if (!uniqueContact(name).length) {
      addContact(contact);
    } else {
      alert(`${name}is already in contacts`);
    }

    setForm(initialState);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          Name
          <input
            onChange={inputHandler}
            type="text"
            name="name"
            value={name}
          ></input>
        </label>
        <label>
          Number
          <input
            onChange={inputHandler}
            type="tel"
            name="number"
            value={number}
          ></input>
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

export default HookForm;
