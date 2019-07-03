import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian? "vegetarian" : "carnivore"}</td>
      <button color="red" type="button" onClick={()=>props.selectPizza(props.id)} className="btn btn-primary">Edit Pizza</button>
    </tr>
  )
}

export default Pizza
