import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Page extends Component {
  render() {
    const { title, children } = this.props
    return (
      <div className="container page">
        <h1>{title}</h1>
        <hr />
        {children}
      </div>
    )
  }
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}
