import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  let myObj = {
    name: "Khan",
    age: 22,
  }
  let myArr = [1, 2, 3, 4, 5]
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-1 bg-gray-900">

      <h1 className="text-4xl font-bold text-blue-500 text-center">
        Tailwind Working 🚀
      </h1>
      <Card username="Khan" someObj={myObj} newArr={myArr} btnText="clickme"/>
      <Card username="asadullah" btnText="explore"/>

    </div>
  )
}

export default App