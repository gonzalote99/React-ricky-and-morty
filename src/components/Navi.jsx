import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavbarBrand, NavbarToggler, NavbarText, Nav, NavItem, Collapse} from 'reactstrap';

export default function Navi(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' dark expand='md' container='lg' className='mb-4'>
      <div>
      <NavbarBrand tag={Link} to='/'>
      ricky and morty
      </NavbarBrand>
        <span className='brand-text'>| characters</span>
      </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className='ms-auto' navbar>
        <NavItem className='mb-2 mb-md-0'>
        <a href='https://github.com/gonzalote99' target='_blank'>github</a>
        </NavItem>
        </Nav>
          <NavbarText>{props.children}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}