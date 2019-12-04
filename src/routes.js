import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './pages/Home/Home';

function RouteLogged({ component: Component, ...rest }) {
  const session = useSelector((state) => state.session);

  return (
    <Route
      {...rest}
      render={(props) => (session.logged ? <Component {...props} /> : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      ))}
    />
  );
}

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <RouteLogged path="/dashboard" component={() => (<h1>Dashboard</h1>)} />
    </Switch>
  );
}
