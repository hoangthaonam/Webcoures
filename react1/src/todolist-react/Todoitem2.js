import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CheckImg from '../img/check.svg';
import CheckedImg from '../img/checked.svg';
var classNames = require('classnames');
class Todoitem2 extends Component{
    render(){
        const {item, filter} = this.props;
        let src = item.isDone === true ? CheckedImg : CheckImg
        return(
            <>
            <div className= {classNames("todoItem", 
            {'hide':(filter==='Done' && item.isDone===false)||(filter==='Not Done' && item.isDone===true)})}>
                <div className = {classNames('item',{'active':item.isDone})}>
                    <img src={src} alt='' onClick={this.props.onItemClick}/>
                    {item.content}
                </div>
                </div>
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