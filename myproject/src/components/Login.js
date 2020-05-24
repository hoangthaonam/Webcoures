import React from 'react';
// import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import auth from './Auth'

class Login extends React.Component {
    handleLoginClick = ()=>{
        auth.login(()=>{
            this.props.history.push("/home");
        })
    }
    render() {
        return(
            <div className="wrapper-login">
                <div className="form-signin">       
                <h2 className="form-signin-heading">Please login</h2>
                <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autoFocus="" />
                <input type="password" className="form-control" name="password" placeholder="Password" required=""/>      
                <label className="checkbox">
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                </label>
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleLoginClick}>Login</button>
                </div>
            </div>
        )
    }
}
export default withRouter(Login);