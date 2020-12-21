import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';

function PrivateRoute({
  children,
  renderComponent = false,
  pathRedirect = '/',
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={() =>
        renderComponent ? children : <Redirect to={{ pathRedirect }} />
      }
    />
  );
}

export default PrivateRoute;
