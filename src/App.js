import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
const API = `http://localhost:3000/pizzas`
class App extends Component {
  state ={
    pizzas: [],
    currentPizza: null
  }
  componentDidMount = () => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }

  handleSubmit = (updatedPizza) =>{
    fetch(API+`/`+updatedPizza.id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify(updatedPizza)
  })
    .then(r =>r.json())
    .then(newPizza =>{
      let updatedArr = this.state.pizzas.map(pizza => {
        if(newPizza.id === pizza.id){
          return newPizza
        } else{
          return pizza
        }
      })
      this.setState({
        pizzas: updatedArr
      })
    })
  }

  handleEdit = (pizza) => {
    this.setState({
      currentPizza: pizza
    })
  }
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleSubmit={this.handleSubmit} currentPizza={this.state.currentPizza}/>
        <PizzaList  handleEdit={this.handleEdit} pizzas={this.state.pizzas}/>
      </Fragment>
    );
  }
}

export default App;
