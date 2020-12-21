import React from 'react';
import { Route, Redirect } from 'react-router-dom';

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
        renderComponent ? (
          children
        ) : (
          <Redirect to={{ pathname: pathRedirect }} />
        )
      }
    />
  );
}

export default PrivateRoute;
