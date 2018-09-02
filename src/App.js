import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import LoginPage from './components/LoginPage/LoginPage';
import WallView from './components/WallView/WallView';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
          />
          <Route
          path="/wall"
          component={WallView}
          />
        {/* Otherwise no path*/}
        <Route
          render={() => <h1>404</h1>}
          />
      </Switch>
    </Router>
  </div>
);

export default App;
