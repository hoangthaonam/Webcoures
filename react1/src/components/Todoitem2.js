import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckImg from '../img/check.svg';
import CheckedImg from '../img/checked.svg';
import DeleteImg from '../img/delete.svg';
import ClosedImg from '../img/close.svg';
var classNames = require('classnames');
class Todoitem2 extends Component{
    state={
        content:this.props.item.content,
        edit: false
    }
    edit(index){
        return(event)=>{
          this.setState({
              edit: true
          })
        }
      }
    changeInput(){
        return(event)=>{
          this.setState({
            content: event.target.value
          })
        }
      }
      updateItem(event){
        return(event)=>{
          if(event.keyCode === 13){
            let text = event.target.value;
            if(text!==""){
                this.setState({
                  edit: false,
                  content: text
                })
            }
            else{
                this.setState({
                    edit: false,
                    content: this.props.item.content
                  })
            }
          }
        }
      }
      updateItemBlurEvent(event){
        return(event)=>{
            let text = event.target.value;
            if(text!==""){
                this.setState({
                    edit: false,
                    content: text
                })
            }
            else{
                this.setState({
                    edit: false,
                    content: this.props.item.content
                  })
            }
        }
      }
    render(){
        const {item, filter, index} = this.props;
        const {edit} = this.state;
        let src = item.isDone === true ? CheckedImg : CheckImg
        return(
            <>
                {filter!=='Trash' && 
                    <div className= {classNames("todoItem", 
                    {'hide':(filter==='Done' && item.isDone===false)||(filter==='Not Done' && item.isDone===true)
                    || item.inTrash=== true})}>
                    {!edit && 
                        <div className = {classNames('item',{'active':item.isDone})}>
                            <img src={src} alt='' onClick={this.props.onItemClick}/>
                            <div className="task" onDoubleClick={this.edit(index)}>
                                {this.state.content}
                            </div>
                            <img src={DeleteImg} alt='' onClick={this.props.remove}/>
                        </div>}
                    {edit && 
                        <div className = 'item'>
                            <div className="task" >
                                <input type = 'text' value = {this.state.content} onChange={this.changeInput()} 
                                onKeyDown={this.updateItem()} onBlur={this.updateItemBlurEvent()}/>
                            </div>
                        </div>}
                    
                    </div>
                }
                {filter==='Trash' && item.inTrash===true && 
                    <div className= "todoItem" >
                            <div className = {classNames('item',{'active':item.isDone})}>
                                <img src={src} alt='' onClick={this.onItemClick}/>
                                <div className="task">
                                    {item.content}
                                </div>
                                <img src={ClosedImg} alt=''/>
                            </div>
                        </div>
                }
            </>
        )
    }
}
Todoitem2.propTypes = {
    item: PropTypes.shape({
        content: PropTypes.string,
        isDone: PropTypes.bool
    }) 

}
export default Todoitem2;