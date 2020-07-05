import React from 'react';
// import { Redirect } from 'react-router-dom';
import { withRouter, Redirect} from 'react-router-dom';
import auth from './Auth'
const axios = require('axios').default;

class Login extends React.Component {
    constructor() {
        super();
        this.username = React.createRef();
        this.password = React.createRef();
        this.url = 'http://localhost:3001/api/auth';
        this.state = {
            err: []
        }
    }
    handleLoginClick = async ()=>{
        let username = this.username.current.value;
        let password = this.password.current.value;
        let response = await axios.post(this.url,{username: username, password:password});
        let {data} = response;
        console.log(typeof data)
        if(typeof data==='object'){
            if(data.id){
                auth.login(()=>{
                    this.props.history.push("/home");
                },data.id)
            }
            else{
                let err = [];
                data.map(item=>err.push(item.message));
                this.setState({
                    err: [...err]
                })
            }
        }
        else if(typeof data === 'string'){
            this.setState({
                err: [data]
            })
        }
    }
    render() {
        const {err} = this.state;
        console.log(auth.isAuthenticated())
        return(
            <>
            {auth.isAuthenticated() === false ? 
            <div className="wrapper-login">
                {err && 
                    err.map((e,index)=>
                        <div key={index} className="alert alert-danger" role="alert">
                            {e}
                        </div>
                    )
                }
                <div className="form-signin">       
                <h2 className="form-signin-heading">Please login</h2>
                {/* <form method="POST" action="http://localhost:3001/api/auth"> */}
                    <input ref = {this.username} type="text" className="form-control" name="username" placeholder="Username" required="" autoFocus="" />
                    <input ref = {this.password} type="password" className="form-control" name="password" placeholder="Password" required=""/>      
                    <label className="checkbox">
                        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                    </label>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleLoginClick}>Login</button>
                    {/* <button className="btn btn-lg btn-primary btn-block" type="submit" >Login</button> */}
                {/* </form> */}
                </div>
            </div>: <Redirect to={{
                pathname: "/home",
                state: {
                  from: this.props.location
                }
              }}/>
                }
            </>
        )
    }
}
export default withRouter(Login);