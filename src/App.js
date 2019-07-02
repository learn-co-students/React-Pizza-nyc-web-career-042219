import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    selectedPizza: null,
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas').then(r => r.json()).then(pizzasArray => this.setState({
      pizzas: pizzasArray,
    }))
  }

  findPizza = (pizzaId) => {
    return this.state.pizzas.find(pizzaObject => pizzaObject.id === pizzaId);
  }

  selectPizzaToEdit = (pizzaId) => {
    const pizzaObject = this.findPizza(pizzaId)
    this.setState({
      selectedPizza: pizzaObject,
    })
  }

  handleSubmit = (id, e) => {
    e.preventDefault()
    e.persist()
    const formNodes = e.target.parentElement.parentElement.childNodes;
    const vegetarian = formNodes[2].children[0].children[0].checked
    const object = {
      topping: formNodes[0].children[0].value,
      size: this.state.selectedPizza.size,
      vegetarian
    }
    console.log(object)
    fetch(`http://localhost:3000/pizzas/${id}`, 
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object)
    }).then(r => r.json()).then(pizzaObject => {
      const newPizzas = this.state.pizzas.map(pizza => {
        if (pizza.id === pizzaObject.id) {
          return pizzaObject
        }
        return pizza
      })
      this.setState({
      selectedPizza: null,
      pizzas: newPizzas
    })})
  }

  updateSize = (e) => {
    this.setState({
      selectedPizza: {...this.state.selectedPizza, size: e.target.value}
    }) 
  }

  updateType = (e) => {
    const veg = e.target.value === 'Vegetarian' ? true : false
    console.log(veg)
    this.setState({
      selectedPizza: {...this.state.selectedPizza, vegetarian: veg}
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm selectedPizza={this.state.selectedPizza} updateSize={this.updateSize} handleSubmit={this.handleSubmit} updateType={this.updateType}/>
        <PizzaList {...this.state} selectPizzaToEdit={this.selectPizzaToEdit}/>
      </Fragment>
    );
  }
}

export default App;
