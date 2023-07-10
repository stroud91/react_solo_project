
import "./App.css"
import React from 'react'
import {Header} from "./components/Header"
import {TaskList} from "./components/TaskList"

function App() {
  


  return (
    <div className="App">
      <Header />
      <TaskList  title = "Random" subtitle="Test"/>
    </div>
  )
}

export default App
