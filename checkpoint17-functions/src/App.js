import React, {useState} from 'react';
import './App.css';

function App(props){


      const [Todos, setTodos]=useState([])
      const [Item, setItem]=useState('')
 const addItem=()=>{
   setTodos([...Todos,{task:Item,id:Math.random()}])
  }
  const handleInput=(e)=>{
    setItem(
      e.target.value
    )

  }
 const deleteItem=(id)=> {
   setTodos(Todos.filter(el=>el.id!==id)
   )
  }
  const editItem=(id)=>{
    let x=prompt('give me your task here')
    setTodos(
    Todos.map(el=>(el.id===id)?{id:id,task:x} :el)
    )
  }
      return(
      <div className="App">
        
        <input type="text" onChange={handleInput}/>
        <button onClick={addItem}>Add New Item</button>

        <ul>
          { Todos.map((todo)=><li key={todo.id}> {todo.task}
          <button onClick={()=>deleteItem(todo.id)}>delete</button>
          <button  onClick={()=>editItem(todo.id)} >edit</button></li>)}
        </ul> 
      </div>)
    }

export default App;