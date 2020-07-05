import React from 'react';

class Register extends React.Component {
    render() {
        return(
            <div className="wrapper-login">
                <div className="form-signin">       
                <h2 className="form-signin-heading">Register form</h2>
                <form method="POST" action="http://localhost:3001/api/auth/register">

                <label className="label-register">Username</label>
                <input ref = {this.username} type="text" className="form-control" 
                    name="username" placeholder="Username" required="" autoFocus="" />

                <label className="label-register">Password</label>
                <input ref = {this.password} type="password" className="form-control" 
                    name="password" placeholder="Password" required=""/>    

                <label className="label-register">Name</label>
                <input ref = {this.password} type="text" className="form-control" 
                    name="name" placeholder="Name" required=""/>

                <label className="checkbox">
                    <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me
                </label>
                {/* <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleLoginClick}>Login</button> */}
                    <button className="btn btn-lg btn-primary btn-block" type="submit" >Register</button>
                </form>
                </div>
            </div>
        );
    }
}
export default Register