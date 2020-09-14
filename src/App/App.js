import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from '../containers/Home'
import { Pray } from '../containers/Pray'
import { Participants } from '../containers/Participants'

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/oraciones" component={Pray} />
        <Route exact path="/participantes" component={Participants} />
      </Switch>
    </BrowserRouter>
  )
}
