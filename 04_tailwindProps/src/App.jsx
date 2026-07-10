import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    username: "hitesh",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-[#242424] p-4">

      <h1 className="bg-green-400 text-black text-3xl font-medium p-4 rounded-xl inline-block">
        Tailwind Test
      </h1>
      <Card username="chaiaurcodeuser" btnText="click me" />  {/*  value written here will be passed into the props of card component or function */}
      <Card username="Himanshu" btnText="visit me" />
    </div>
  )
}

export default App  