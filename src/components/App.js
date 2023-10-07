import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
   const [pizzaList, setPizzaList] = useState([]);
   const [topping, setTopping] = useState('')
   const [size, setSize] = useState('')
   const [vegetarian, setVegetarian] = useState('')

  useEffect(() => {
    async function fetchPizzas() {
      const response = await fetch('http://localhost:3001/pizzas')
      const pizzas = await response.json();
      return pizzas;
    }
    fetchPizzas().then(pizzas => {
      setPizzaList(pizzas);
    });
    
  }, []) 

  function editPizza(pizza) {
    console.log(pizza);
    setTopping(pizza.topping);
    setSize(pizza.size);
    setVegetarian(pizza.vegetarian);
  }


  function editedPizza(newPizza) {
    setPizzaList(prevPizzaList => {
      const updatedPizzaList = prevPizzaList.map(pizza => {
        if (pizza.id === newPizza.id) {
          return newPizza;
        }
        return pizza;
      });
      return updatedPizzaList;
    });
  }
  return (
    <>
      <Header />
      <PizzaForm
        topping={topping}
        size={size}
        vegetarian={vegetarian}
        setTopping={setTopping}
        setSize={setSize}
        setVegetarian={setVegetarian}
        editedPizza={editedPizza}
        setPizzaList={setPizzaList}
      />      
      <PizzaList pizzaList={pizzaList} editPizza={editPizza} setPizzaList={setPizzaList}/>
    </>
  );
}

export default App;
