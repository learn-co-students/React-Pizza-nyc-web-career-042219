import React from "react"

class PizzaForm extends React.Component {

  state = {
    topping: '',
    size: '',
    vegetarian: null
  }

  componentDidUpdate(prevProps) {
    if(prevProps.selectedPizza !== this.props.selectedPizza) {
      this.setState({
        topping: this.props.selectedPizza.topping,
        size: this.props.selectedPizza.size,
        vegetarian: this.props.selectedPizza.vegetarian
      })
    }
  }

  handleChange(event) {
    event.persist()
    if(event.target.value === 'Vegetarian') {
      this.setState({
        [event.target.name]: !this.state.vegetarian
      })
    }else{
      this.setState({
        [event.target.name]: event.target.value,
      })
    }
  }

  render() {
    return(
        <div className="form-row">
          <div className="col-5">
              <input 
                onChange={(e) => {this.handleChange(e)}}
                name='topping'
                type="text" 
                className="form-control" 
                placeholder="Pizza Topping" 
                value={this.state.topping}
              />
          </div>
          <div className="col">
          <select value={this.state.size} 
            name="size"
            className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
            <input 
              onChange={(e) => { this.handleChange(e) }}
              className="form-check-input" 
              type="radio" 
              value="Vegetarian" 
              name='vegetarian'
              checked={this.state.vegetarian ? true : false}
            />
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" name='vegetarian' checked={this.state.vegetarian ? false : true}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={() => this.props.handleSubmit({...this.state, id:this.props.selectedPizza.id})}>Submit</button>
          </div>
        </div>
    )
  }
}

export default PizzaForm
