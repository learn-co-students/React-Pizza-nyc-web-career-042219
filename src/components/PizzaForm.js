import React from "react"

export default class PizzaForm extends React.Component{

  state = {
    topping: "",
    size: "unkown",
    veggie: null,
    id: ""
  }

componentDidUpdate(prevProps) {
  if (prevProps.selectedPizza.id !== this.props.selectedPizza.id) {
    this.setState({id: this.props.selectedPizza.id})
  }
}

render(){
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={(e)=>this.setState({topping: e.target.value})}
            type="text"
            className="form-control"
            placeholder="Pizza Topping"
            value={this.state.topping}/>
        </div>
        <div className="col" onChange={(e)=>this.setState({size: e.target.value})}>
          <select value={this.state.size} className="form-control">
            <option value="unk">Unkown</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col-2" onChange={(e)=>this.setState({veggie: (e.target.value) })}>
          <select value={this.state.veggie}className="form-control">
            <option value={false}>Mixed</option>
            <option value={false}>Vegetarian</option>
            <option value={true}>Not Vegetarian</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success" onClick={()=>this.props.editPizza(this.state)}>Submit</button>
        </div>


  )

}

}
