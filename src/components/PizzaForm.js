import React, { useState, useEffect } from "react"

const PizzaForm = (props) => {
  const [newInfo, setNewInfo] = useState(props.pizzaInfo)

  useEffect(() => {
    setNewInfo(props.pizzaInfo);
    console.log(newInfo)
  }, [props.pizzaInfo])

  const handleChange = (e) => {
    e.persist()
    if (e.target.value === 'vegetarian') {
      setNewInfo({...newInfo, [e.target.value]: !newInfo.vegetarian})
    } else {
      setNewInfo({...newInfo, [e.target.name]: e.target.value})
    }
  }

  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" name='topping' placeholder="Pizza Topping" value={newInfo.topping} onChange={(e) => handleChange(e)}/>
        </div>
        <div className="col">
          <select value={newInfo.size} name='size' className="form-control" onChange={(e) => handleChange(e)}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name='vegetarian' type="radio" value="vegetarian" checked={(newInfo.vegetarian) ? true : false} onChange={(e) => handleChange(e)}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name='vegetarian' type="radio" value="vegetarian" checked={(newInfo.vegetarian) ? false : true} onChange={(e) => handleChange(e)}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={() => props.editPizza(newInfo)}>Submit</button>
        </div>
      </div>
  )
}

export default PizzaForm
