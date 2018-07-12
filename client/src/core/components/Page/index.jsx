import PropTypes from 'prop-types'
import React, { Component } from 'react'

const Page = ({ title, children }) => (
  <div className="container">
    <h1>{title}</h1>
    {children}
  </div>
)

Page.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Page