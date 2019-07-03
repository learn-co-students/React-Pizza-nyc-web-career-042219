import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    selectedPizza: {}
  }

  fetchPizzas = () => {
    fetch('http://localhost:3000/pizzas')
    .then(res=>res.json())
      .then(data => {
        this.setState({
          pizzas: data
        })
      })
  }

  componentDidMount() {
    this.fetchPizzas()
  }

  handleEdit = (props) => {
    this.setState({
      selectedPizza: props
    })
  }

  handleSubmit = (pizza) => {
    fetch(`http://localhost:3000/pizzas/${pizza.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(pizza)
    })
      .then(res => res.json())
      .then(newPizza => {
        let newPizzas = this.state.pizzas.map(pizza => {
          if (pizza.id === newPizza.id) {
            return newPizza
          } else {
            return pizza
          }
        })
        this.setState({
          pizzas: newPizzas
        })
      })
  }

  render() {
    
    return (
      <Fragment>
        <Header/>
        <PizzaForm
          selectedPizza={this.state.selectedPizza}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList
          pizzas={this.state.pizzas}
          handleEdit={this.handleEdit}
        />
      </Fragment>
    );
  }
}

export default App;
