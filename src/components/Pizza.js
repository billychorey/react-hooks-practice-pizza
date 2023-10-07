import React from "react";

function Pizza({id, topping, size, vegetarian, editPizza, pizza}) {
  function handleClick() {
    editPizza(pizza);
    // console.log(pizza)
  }
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button onClick={handleClick} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
