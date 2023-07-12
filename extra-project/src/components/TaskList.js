import React from "react";
import { useState } from "react";
import { BoxCard } from "./BoxCard";
import { TaskCard } from "./TaskCard";



export const TaskList = (props) => {
    
    const [tasks, setTasks] = useState(
  [
  {id: 5271, name: "Record  React Lectures", completed: true},
  {id: 7825, name: "Edit React Lectures", completed: false},
  {id: 9391, name: "Watch Lectures", completed: false}
  ]
)
    
    const[show, setShow] = useState(true)
    
  function handleDelete(id) {
   setTasks(tasks.filter(task =>id !== task.id))
  }
    return( 
    <>
    <h1>Task List {props.title} {props.subtitle}</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>Toggle</button>
        {show && tasks.map((task) =>(
           <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
        ))}
      </ul>
      <BoxCard result ="success">
           <p className="title">lorem5</p>
          <p className="description">lorem10</p>
      </BoxCard>
      
      <div className= "box warning">
          <p className="title">lorem2</p>
          <p className="description">lorem11</p>
      </div>
      <div className= "box alert">
          <p className="title">lorem23</p>
          <p className="description">lorem11</p>
      </div>
    </>
    )
}