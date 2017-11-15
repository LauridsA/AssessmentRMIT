import React from 'react'
import { Button, Navbar, NavDropdown, Nav, NavItem, MenuItem, Grid } from 'react-bootstrap'
export default class Header extends React.Component{

    constructor(){
        super()
        
    }
      
      
    render(){
        return(
            <div> 
               <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#">React-Bootstrap</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
      <NavItem eventKey={1} href="#">Product Page</NavItem>
      <NavItem eventKey={2} href="#">User??</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
      <MenuItem eventKey={4}> Shopping Cart</MenuItem>
    </Nav>
  </Navbar>
            </div>
        )
    }
}