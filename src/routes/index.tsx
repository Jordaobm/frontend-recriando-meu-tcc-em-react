import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Category from '../pages/Category';

const Routes: React.FC = () => {
  return (
    <Switch>

      <Route path="/" exact component={Home} logged />
      <Route path="/category/:category+" component={Category} logged />

      <Route path="/signin" component={SignIn} logged={false} />
      <Route path="/signup" component={SignUp} logged={false} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;