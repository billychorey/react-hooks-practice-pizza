import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
   const [pizzaList, setPizzaList] = useState([]);
   const [selectedPizza, setSelectedPizza] = useState({})
  
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

  const selectPizza = (pizzaObj) => {
    setSelectedPizza(pizzaObj);
  }
 
  const handlePizzaChange = (pizzaObj) => {
    // console.log(pizzaObj)
    const updatedPizzaList = [...pizzaList].map(pizza => {
      if(pizza.id === pizzaObj.id) {
        return pizzaObj;
      } else {
        return pizza;
      }
    })
    setPizzaList(updatedPizzaList)

    fetch(`http://localhost:3001/pizzas/${pizzaObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(pizzaObj)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Request failed')
      }
      return response.json();
    })
    .catch(error => {
      console.error(error);
    });
  
  }


  
  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} handlePizzaChange={handlePizzaChange}/>      
      <PizzaList pizzaList={pizzaList} selectPizza={selectPizza}/>
    </>
  );
}

export default App;
