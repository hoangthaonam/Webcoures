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
import Filter from './components/Filter'



class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      filter: 'ALL',
      TodoItem: [
        {content: "Wake up", isDone: false, inTrash: false},
        {content: "Exercise", isDone: false, inTrash: false},
        {content: "Brush teeth", isDone: true, inTrash: false},
        {content: "Drink Coffee", isDone: false, inTrash: false},
        {content: "Eating breakfast", isDone: false, inTrash: false}
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
            ...this.state.TodoItem,
            {content: text, isDone: false, inTrash: false}
          ]
        })
      }
    }
  }
  addItemBlurEvent(event){
    return(event)=>{
      let text = event.target.value;
      if(text!==""){
        this.setState({
          newItem: '',
          TodoItem:[
            ...this.state.TodoItem,
            {content: text, isDone: false}
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
  remove(index){
    return(event)=>{
      let {TodoItem} = this.state;
      TodoItem.map((item,i)=>{
        if(i===index) item.inTrash = true;
        return item;
      })
      this.setState({
        TodoItem:[
          ...TodoItem
        ]
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
        <input type="text" placeholder="Add New Item" value={newItem} onKeyDown={this.addItem()} onChange={this.changeInput()} onBlur={this.addItemBlurEvent()}/>
        {
          TodoItem.map((item,index)=>{
            return <Todoitem2 key = {index} index={index} item={item} filter={filter} onItemClick = {this.onItemClick(index)} remove={this.remove(index)}/>
          })
        }
        <Filter filter={this.filter.bind(this)}/>
      </div>
    );
  }
}

export default App;
