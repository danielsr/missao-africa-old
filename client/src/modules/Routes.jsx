import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import Sponsors from './Sponsors'
import SponsorsImport from './Sponsors/SponsorsImport'

export default () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/sponsors" component={Sponsors} />
    <Route exact path="/sponsors/import" component={SponsorsImport} />
  </Switch>
)
