import React, {Component} from 'react';
class Filter extends Component{
    render(){
        return(
            <div className="filter">
                <button onClick = {this.props.filter()}>All</button>
                <button onClick = {this.props.filter()}>Done</button>
                <button onClick = {this.props.filter()}>Not Done</button>
                <button onClick = {this.props.filter()}>Trash</button>
            </div>
        )
    }
}
export default Filter;