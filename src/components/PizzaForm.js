import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                props.selectedPizza ? props.selectedPizza.topping : ""
              }/>
        </div>
        <div className="col">
          <select onChange={props.updateSize} value={props.selectedPizza ? props.selectedPizza.size : ""} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" onClick={props.updateType} checked={props.selectedPizza ? props.selectedPizza.vegetarian : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onClick={props.updateType} checked={props.selectedPizza ? !props.selectedPizza.vegetarian : null}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e) => props.handleSubmit(props.selectedPizza.id, e)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
