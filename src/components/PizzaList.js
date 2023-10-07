import React, {useState, useEffect} from "react";
import Pizza from "./Pizza";

function PizzaList({pizzaList, editPizza, setPizzaList}) {
 
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        { pizzaList.map((pizza) => {
          return(
            <Pizza {...pizza} key={pizza.id} pizza={pizza} editPizza={editPizza}/>
          )
        })


        }
      </tbody>
    </table>
  );
}

export default PizzaList;
