import { useState } from 'react'
// import './App.css'

function App() {

  // setcounter is a function which will update the value of counter
  let [counter, setCounter] = useState(15)   // useState give two entity in the form of array. at 0th index, a variable is there and at 1st a function is there

  // let counter = 15  commented bcs although the value of counter will be updated from the below code or function but it wont reflect in the UI

  const increaseValue = () => {

    if (counter < 20) {
      setCounter(counter + 1)
      console.log("clicked", counter)
    }

  }

  const decreaseValue = () => {

    if (counter > 0) {
      setCounter(counter - 1)
    }

  }


  return (
    <>
      <h1> chai aur react </h1>
      <h2> Counter value: {counter} </h2>

      <button onClick={increaseValue}>
        increase value {counter}
      </button>

      <br />

      <button onClick={decreaseValue}>
        Decrease value {counter}</button>

      <p>footer: {counter}</p>

    </>
  )
}

export default App
