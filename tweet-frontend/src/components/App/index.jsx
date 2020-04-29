import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../../components';
import {List} from '../../components';


const App = (props) => {
  console.log("APP CALLED");
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/list" component={List} />
     
    </Switch>
  )
}

export default withRouter(App);