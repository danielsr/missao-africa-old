import PropType from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Switch, Route, withRouter } from 'react-router-dom'
import { Spinner, Toast } from '../../core/components'
import { actions } from '../../state/actions'
import Sponsors from '../Sponsors/Sponsors'
import SponsorsImport from '../Sponsors/SponsorsImport'
import Footer from './Footer'
import Header from './Header'
import './style.css'

class Main extends Component {
  render() {
    const { isLoading, msg } = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Sponsors} />
          <Route exact path="/import" component={SponsorsImport} />
        </Switch>
        <Footer />
        {isLoading && <Spinner />}
        {msg && <Toast msg={msg} />}
      </div>
    )
  }
}

const mapProps = state => ({
  isLoading: state.isLoading,
  msg: state.msg
})

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
