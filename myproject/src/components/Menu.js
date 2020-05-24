import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import auth from './Auth'

const links = [
  { path: '#home', text: 'Home' },
  { path: '#cata', text: 'Categories' },
  { path: '#busns', text: 'Adds' },
  { path: '/login', text: 'LOGIN' },
];

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleLogoutClick = ()=>{
    auth.logout(()=>{
        this.props.history.push("/");
    })
}
  render() {
    return (
      <div>
        <Navbar className="fixed-top" color="dark" dark expand="md">
          <NavbarBrand href="/">MovieCard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map((item,index)=>{
                return(
                <NavItem key={index}>
                  <NavLink className= "menu-item">{item.text}</NavLink>
                </NavItem>
                )
              })}
              <NavItem className = "menu-item" onClick={this.handleLogoutClick}>
                  <NavLink>Logout</NavLink>
                </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(Menu);

