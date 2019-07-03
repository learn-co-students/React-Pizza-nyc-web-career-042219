import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

state = {
  ogPizza: [],
  pizza: [],
  selectedPizza: {}
}


componentDidMount(){
  fetch("http://localhost:3000/pizzas")
  .then(r=>r.json())
  .then(data=>{
    this.setState({
      pizza: data, ogPizza: [...data]
    })
  })
}



selectPizza = (id) => this.setState({ selectedPizza: this.state.pizza.find(piz=>piz.id===id)})




editPizza = (pizza) => {
const newPizzaArr  = this.state.pizza.map(piz=> {
  if (piz.id===pizza.id){
    return pizza
  } else {
    return piz
  }
})
  this.setState({pizza: newPizzaArr})
}






  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm  editPizza={this.editPizza} selectedPizza={this.state.selectedPizza}/>
        <PizzaList pizza={this.state.pizza} selectPizza={this.selectPizza}/>
      </Fragment>
    );
  }
}

export default App;
