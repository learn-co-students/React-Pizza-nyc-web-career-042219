import React, { Component } from 'react';
import Pizza from '../components/Pizza'




class PizzaList extends Component {
render() {
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
          {
          this.props.pizza.map(piz=><Pizza key={piz.id} {...piz} selectPizza={this.props.selectPizza}/>)
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
