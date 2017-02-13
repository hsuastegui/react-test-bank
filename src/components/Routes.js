import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Home from './Home';
import Accounts from './Accounts';
import Account from './Account';

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="accounts" component={Accounts} />
      <Route path="account/:id" component={Account} />
    </Route>
  </Router>
);

export default Routes;