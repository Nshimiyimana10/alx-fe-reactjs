import React from 'react';
import {useState} from 'react';

function ToDoList() {
    const[task, setTask] = useState([]);

    function AddToDoForm(){
        
    }
  return (
    <div>
       <input type="text" placeholder='add new task' value ={task}/>
       <button onClick={AddToDoForm}>Add task</button>
    </div>
  )
}

export default ToDoList