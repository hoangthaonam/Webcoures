import React from 'react';
import {withRouter} from 'react-router-dom';
const axios = require('axios').default;


class Add extends React.Component {
    constructor() {
        super();
        this.state={
            err: []
        }
        this.name = React.createRef();
        this.youtubeURL = React.createRef();
        this.url = 'http://localhost:3001/api/movie/add';
    }
    handleAddMovie = async ()=>{
        let name = this.name.current.value;
        let youtubeURL = this.youtubeURL.current.value;
        let {data} = await axios.post(this.url,{name: name, url: youtubeURL});
        
        if(data!=='success'){
            if(typeof data === 'string'){
                this.setState({
                    err: [data]
                })
            }
            else if(typeof data === 'object'){
                let err = [];
                data.map(item=>err.push(item.message));
                this.setState({
                    err: [...err]
                })
            }
        }else{
            localStorage.removeItem('movies');
            this.props.history.push('/home')
        }
        
    }
    render(){
        const {err} = this.state;
        return(
            <>
            <div className="form-group add-form" >
                <input ref = {this.name} type="text" className="form-control add-input" name="name" placeholder="Enter movie's name" />
                <input ref = {this.youtubeURL} type="text" className="form-control add-input" name="name" placeholder="Enter youtube URL" />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                <button type="submit" className="btn btn-primary" onClick={this.handleAddMovie}>Add</button>
            </div>
            <div className="error-add">
                {err && 
                    err.map((e,index)=>
                        <div key={index} className="alert alert-danger" role="alert">
                            {e}
                        </div>
                    )
                }
            </div>
            </>
        )
    }
}
export default withRouter(Add);