import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
import { Icon3dCubeSphere } from '@tabler/icons';

class Header extends Component {
  render() {
    return(
      <Navbar bg="dark" variant="dark" className="justify-content-between">
        <Navbar.Brand href="/">
          <Icon3dCubeSphere/>
          <span className="ml-2">NOTEMAN</span>
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Header;