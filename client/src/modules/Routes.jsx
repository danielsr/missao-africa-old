import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Sponsors from './Sponsors/Sponsors'
import SponsorsImport from './Sponsors/SponsorsImport'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Sponsors} />
    <Route exact path="/import" component={SponsorsImport} />
  </Switch>
)

export default Routes
