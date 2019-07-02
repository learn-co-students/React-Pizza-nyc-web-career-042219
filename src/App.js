import React, { useState, useEffect, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

function App() {
  const [pizzas, setPizzas] = useState([])
  const [pizzaInfo, setPizzaInfo] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/pizzas')
    .then(r => r.json())
    .then(allPizzas => {
      setPizzas(allPizzas)
    })
  }, [])

  const handleInfo = (pizzaInfo) => setPizzaInfo(pizzaInfo)

  const editPizza = (editPizza) => {
    fetch(`http://localhost:3000/pizzas/${editPizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Type': 'application/json'
      },
      body: JSON.stringify(editPizza)
    })
    .then(r => r.json())
    .then(pizzaData => {
      let updatedPizzas = pizzas.map(p => (p.id === editPizza.id) ? editPizza : p)

      setPizzas(updatedPizzas)
    })
  }

  return (
    <Fragment>
      <Header/>
      <PizzaForm pizzaInfo={pizzaInfo} editPizza={editPizza} />
      <PizzaList pizzas={pizzas} handleInfo={handleInfo} />
    </Fragment>
  )
}

export default App;
