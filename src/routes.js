import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './Components/App';
import Room from './Components/Room'

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

function myRoutes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/rooms/:id" component={Room} />
        <Route component={NoMatchPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default myRoutes;