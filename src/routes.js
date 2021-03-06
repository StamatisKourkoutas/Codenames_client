import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './Components/App';
import Settings from './Components/Settings';
import Room from './Components/Room';
import Instructions from './Components/Instructions'

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
        <Route path="/settings" component={Settings}/>
        <Route path="/instructions" component={Instructions}/>
        <Route path="/rooms/:id/:language" component={Room} />
        <Route component={NoMatchPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default myRoutes;