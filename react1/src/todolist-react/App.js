import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import TodoItem from './components/TodoItem'
// import Example from './components/Example';
// import Row from './components/Row';

// import Image from './components/Image';
// import Condition from './components/Condition'
// import TrafficLight from './components/TrafficLight'
// import '../styles/traffic.css'
import Todoitem2 from './components/Todoitem2'
import './styles/todolist2.css'



class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      filter: 'ALL',
      TodoItem: [
        {content: "Wake up", isDone: false},
        {content: "Exercise", isDone: false},
        {content: "Brush teeth", isDone: true},
        {content: "Drink Coffee", isDone: false},
        {content: "Eating breakfast", isDone: false}
      ]
    }
  }
  onItemClick(index){
    return(event)=>{
      let {TodoItem} = this.state;
      TodoItem.map((item,i)=>{
        if(i===index) item.isDone = !item.isDone;
        return item;
      })
      this.setState({
        TodoItem:[
          ...TodoItem
        ]
      })
    }
  }
  addItem(event){
    return(event)=>{
      if(event.keyCode === 13){
        let text = event.target.value;
        this.setState({
          newItem: '',
          TodoItem:[
            {content: text, isDone: false},
            ...this.state.TodoItem
          ]
        })
      }
    }
  }
  changeInput(){
    return(event)=>{
      this.setState({
        newItem: event.target.value
      })
    }
  }
  filter(){
    return(event)=>{
      this.setState({
        filter: event.target.innerHTML
      })
    }
  }
  render(){
    const {TodoItem, newItem, filter} = this.state;
    return (
      <div className="content">
        <h1>TODOLIST VERSION 2</h1>
        <input type="text" placeholder="Add New Item" onKeyDown={this.addItem()} value={newItem} onChange={this.changeInput()}/>
        {
          TodoItem.map((item,index)=>{
            return <Todoitem2 key = {index} item={item} filter={filter} onItemClick = {this.onItemClick(index)}/>
          })
        }
        <div className="filter">
          <button onClick = {this.filter()}>All</button>
          <button onClick = {this.filter()}>Done</button>
          <button onClick = {this.filter()}>Not Done</button>
        </div>
      </div>
    );
  }
}

export default App;
