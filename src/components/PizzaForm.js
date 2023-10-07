import React, { useState, useEffect } from "react";

function PizzaForm({
  topping,
  size,
  vegetarian,
  setTopping,
  setSize,
  setVegetarian,
  editedPizza,
  setPizzaList
}) {
  useEffect(() => {
  

  if (editedPizza) {
    setTopping(editedPizza.topping);
    setSize(editedPizza.size);
    setVegetarian(editedPizza.vegetarian);
  }
}, [editedPizza, setTopping, setSize, setVegetarian, setPizzaList]);

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "topping") {
      setTopping(value);
    } else if (name === "size") {
      setSize(value);
    } else if (name === "vegetarian") {
      setVegetarian(value);
    }
  }

  function submitForm(event) {
    event.preventDefault();
    const newPizza = {
      topping: topping,
      size: size,
      vegetarian: vegetarian
    };
    editedPizza(newPizza)
  }

  return (
    <form onSubmit={submitForm}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={size}
            onChange={handleChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian === "Vegetarian"}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={vegetarian === "Not Vegetarian"}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;




