import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './Auth'
const PrivateRoute = (props) =>{
    const {children,...rest} = props
    return (
        <>
            {auth.isAuthenticated()=== true ? 
            
            <Route {...rest}>
                <>{children}</>
            </Route>: <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
            }
        </>
    )
}

export default PrivateRoute;