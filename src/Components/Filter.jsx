import React from "react";

const Filter = ({ filter, setFilter }) => {
  const inputHandler = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  return (
    <div>
      <label>
        Find contacts by name <input value={filter} onChange={inputHandler} />
      </label>
    </div>
  );
};

export default Filter;
