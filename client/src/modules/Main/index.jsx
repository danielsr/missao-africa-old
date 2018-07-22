import PropType from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { Spinner, Toast } from '../../core/components'
import { actions } from './actions'
import Footer from './Footer'
import Header from './Header'
import './style.css'

const Main = ({ isLoading, msg, children }) => (
  <div className="layout">
    <Header />
    <div className="main">
      {children}
    </div>
    <Footer />
    {isLoading && <Spinner />}
    {msg && <Toast msg={msg} />}
  </div>
)

const mapProps = state => state

const mapActions = {
  setMsg: actions.setMsg
}

Main.propTypes = {
  children: PropType.node,
  isLoading: PropType.bool,
  msg: PropType.string
}

export default compose(
  withRouter,
  connect(mapProps, mapActions)
)(Main)
