import "./App.css"
import FoodItems from "./components/FoodItems";
function App() {

  // let emptlyMessage = foodItems.length === 0 ? <h2>I am still hungry</h2> : null ;

  return (
    <>
      <h1>Healthy Foods</h1>
      {/* {emptlyMessage} */}
      <FoodItems></FoodItems>
    </>
  )
}

export default App
