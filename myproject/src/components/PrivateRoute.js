import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from './Auth'
class PrivateRoute extends React.Component {
  render() {
    const {children,...rest} = this.props;
    let {movieId} = this.props.computedMatch.params;
    return (
        <>
            {auth.isAuthenticated()=== true ? 
            
            <Route {...rest}>
              { movieId ? 
                React.cloneElement(this.props.children,{movieId:movieId})
                :
                React.cloneElement(this.props.children)
              }
            </Route>: <Redirect
              to={{
                pathname: "/",
                state: {
                  from: this.props.location
                }
              }}
            />
            }
        </>
    )
  }
}
export default PrivateRoute;

// const PrivateRoute = (props) =>{
//     const {children,...rest} = props;
//     console.log(props.params);
//     return (
//         <>
//             {auth.isAuthenticated()=== true ? 
            
//             <Route {...rest}>
//               {React.cloneElement(children)}
//                 {/* <>{children}</> */}
//             </Route>: <Redirect
//               to={{
//                 pathname: "/",
//                 state: {
//                   from: props.location
//                 }
//               }}
//             />
//             }
//         </>
//     )
// }
