import React, {Component } from 'react';
import './App.css';

export class App extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      todos:[],
      item:''
     }
  }
 
    
  
  addItem=()=>{
   this.setState({
     todos:[...this.state.todos,{task:this.state.item,id:Math.random()}]
   })
  }
  handleInput=(e)=>{
    this.setState({
      item:e.target.value
    })

  }
  deleteItem=(id)=> {
   this.setState({
     todos:this.state.todos.filter(el=>el.id!==id)
   })
  }
  editItem=(id)=>{
    let x=prompt('give me your task here')
    this.setState({
     todos:this.state.todos.map(el=>(el.id===id)?{id:id,task:x} :el)
    })
  }

    render(){
      return(
      <div className="App">
        
        <input type="text" onChange={this.handleInput}/>
        <button onClick={this.addItem}>Add New Item</button>

        <ul>
          { this.state.todos.map((todo)=><li key={todo.id}> {todo.task}
          <button onClick={()=>this.deleteItem(todo.id)}>delete</button>
          <button  onClick={()=>this.editItem(todo.id)} >edit</button></li>)}
        </ul> 
      </div>)
    }
}

export default App;
