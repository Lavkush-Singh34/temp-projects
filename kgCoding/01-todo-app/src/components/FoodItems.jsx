import React from 'react'

function FoodItems() {

  // let foodItems = [];
  let foodItems = ["dal", "Chawal", "Roti", "Salad", "Milk", "Ghee", "Green vegetables"];

  return (
    <>

      {foodItems.length === 0 && <h2>I am still hungry</h2>}
      < ul >
        {foodItems.map(item => <li key={item} >{item}</li>)}
      </ul >
    </>
  )
}

export default FoodItems;