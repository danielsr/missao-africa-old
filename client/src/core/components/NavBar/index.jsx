import PropTypes from 'prop-types'
import React, { Component } from 'react'
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
      <Link className="menu-item" to={item.link} key={index}>
        {item.text}
      </Link>
    ))
  }

  render() {
    const { title } = this.props

    return (
      <div className="container">
        <div className="menu">
          <Link className="menu-item brand" to="/">
            {title}
          </Link>
          {this.renderItems()}
        </div>
      </div>
    )
  }
}

NavBar.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
}

export default NavBar
