import React, { useState } from 'react';
import { NavLink as ReactLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function NavbarController(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  className="my-2"
    color="dark"
    dark>
        <NavbarBrand href="/">Seva</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                Home
              </NavLink>
              
              <NavLink  tag={ReactLink} to="/About">
                About Us
              </NavLink>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
              <NavLink  tag={ReactLink} to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarController