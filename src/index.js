import React, {Component} from 'react';
import {Nav, NavBar, NavLink, NavItem} from 'react-bootstrap';


class GitNav extends Component{
    handleSelect(eventKey){
      window.location = this.props.NavURLs[eventKey];
    }
  render(props){
    const NavTextItems = this.props.NavTexts.map((eachNav, key) =>
      <NavItem eventKey={key} href="#">{eachNav}</NavItem>
      );
    return(
      <Navbar fixedTop collapseOnSelect>
    {/* where = either fixedTop or fixedBottom */}
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
            <Navbar.Collapse>
              <Nav onSelect={this.handleSelect.bind(this)}>
                {NavTextItems}
              /* Actual NavItems consisiting of two parts - NavURLS -> Array of NavURLS, NavTexts -> Array of Text to appear on the array*/
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    );
  }
}

export default GitNav;