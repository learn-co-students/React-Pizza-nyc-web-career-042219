import React from "react"

class PizzaForm extends React.Component {
  state={
    topping: null,
    size: null,
    vegetarian: null

  }

  handleChange = (e) => {
    e.persist()
    if(e.target.name === 'vegetarian'){
      this.setState({
        [e.target.name]: !this.state.vegetarian
      })
    }
    else {
      this.setState({
      [e.target.name]: e.target.value
    })
  }
  }

  componentDidUpdate = (prevProps) =>{
    if(this.props.currentPizza !== prevProps.currentPizza){
      this.setState({
        topping: this.props.currentPizza.topping,
        size: this.props.currentPizza.size,
        vegetarian: this.props.currentPizza.vegetarian
      })
    }
  }
  render(){
    console.log(this.props)
    return(
        <div className="form-row" >
          <div className="col-5">
              <input onChange={this.handleChange} type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={
                  this.state.topping
                }/>
          </div>
          <div className="col">
            <select onChange={this.handleChange} value={this.state.size} name="size" className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>  
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input onChange={this.handleChange} name="vegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={this.state.vegetarian ? true : false}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input onChange={this.handleChange} name="vegetarian" className="form-check-input" type="radio" value="Not Vegetarian" checked={this.state.vegetarian ? false : true}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={()=>this.props.handleSubmit({...this.state, id: this.props.currentPizza.id})}>Submit</button>
          </div>
        </div>

    )
  }
}

export default PizzaForm
