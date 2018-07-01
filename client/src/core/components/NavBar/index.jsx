import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Collapse,
  Navbar as NavbarStrap,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen
    })
  }

  renderItems() {
    const { items } = this.props
    if (!items) return null
    return items.map((item, index) => (
      <NavItem key={index}>
        <Link className="nav-link" to={item.link}>
          {item.text}
        </Link>
      </NavItem>
    ))
  }

  render() {
    const { title } = this.props
    const { isOpen } = this.state

    return (
      <NavbarStrap className="navbar-dark bg-dark" expand="md" fixed="top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <NavbarToggler onClick={() => this.toggle()} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              {this.renderItems()}
            </Nav>
          </Collapse>
        </div>
      </NavbarStrap>
    )
  }
}

NavBar.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default NavBar
